import { createContext, useContext, useState } from "react";
import type { PropsWithChildren, ReactElement } from "react";
import type { RequestSigninDto } from "../types/apis/User";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { LOCAL_STORAGE_KEY } from "../constants/apis/key";
import { postLogout, postSignin } from "../apis/User";

interface AuthContextType {
    accessToken : string | null;
    refreshToken : string | null;
    login : (signinData : RequestSigninDto ) => Promise<void>;
    logout : () => Promise<void>
}

export const AuthContext = createContext<AuthContextType>({
    accessToken : null,
    refreshToken : null,
    login : async () => {},
    logout : async () => {},
});

export const AuthProvider = ({children}:PropsWithChildren): ReactElement => {
    const {
        getItem: getAccessTokenFromStorage,
        setItem: setAccessTokenInStorage,
        removeItem: removeAccessTokenFromStorage
    } = useLocalStorage(LOCAL_STORAGE_KEY.accessToken);

    const {
        getItem: getRefreshTokenFromStorage,
        setItem: setRefreshTokenInStorage,
        removeItem: removeRefreshTokenFromStorage
    } = useLocalStorage(LOCAL_STORAGE_KEY.refreshToken);
    
    const [accessToken, setAccessToken] = useState<string|null>(
        getAccessTokenFromStorage(), // 지연 초기화
    )

    const [refreshToken, setRefreshToken] = useState<string|null>(
        getRefreshTokenFromStorage(), // 지연 초기화
    )

    // const login = async (signinData: RequestSigninDto) => {
    //     try {
    //         const { accessToken, data } = await postSignin(signinData);

    //         if (data){
    //             // 원시 토큰 값
    //             const rawAccessToken: string = accessToken;
    //             const rawRefreshToken: string = data.refreshToken;

    //             console.log("typeof token:", typeof rawAccessToken); // string이어야 함
    //             console.log("token:", rawAccessToken); // 🔍 여기

    //             // ✅ 양쪽 쌍따옴표 감싸져 있으면 제거
    //             const cleanedAccessToken = rawAccessToken.replace(/^"(.*)"$/, '$1');
    //             const cleanedRefreshToken = rawRefreshToken.replace(/^"(.*)"$/, '$1');

    //             // ✅ 저장 및 상태 업데이트
    //             setAccessTokenInStorage(cleanedAccessToken);
    //             setRefreshTokenInStorage(cleanedRefreshToken);

    //             setAccessToken(cleanedAccessToken);
    //             setRefreshToken(cleanedRefreshToken);

    //             alert("로그인 성공");
    //             window.location.href = "/";
    //         }
    //     } catch (error){
    //         console.error("로그인 오류",error)
    //         alert("로그인 실패")
    //     }
    // }
    const login = async (signinData: RequestSigninDto) => {
    try {
        const response = await postSignin(signinData);

        //명세서 기반 응답 구조 
        const { isSuccess, code, message, result } = response.data;
        console.log("로그인 성공:", {
        isSuccess,
        code,
        message,
        result,
        });

        if (result) {
        const accessTokenRaw =
            response.headers.authorization?.split(" ")[1] || "";
        const refreshTokenRaw = result["Refresh-Token"];

        // ✅ 양쪽 쌍따옴표 감싸져 있으면 제거
        const cleanedAccessToken = accessTokenRaw.replace(/^"(.*)"$/, "$1");
        const cleanedRefreshToken = refreshTokenRaw.replace(/^"(.*)"$/, "$1");

        // ✅ 저장 및 상태 업데이트
        setAccessTokenInStorage(cleanedAccessToken);
        setRefreshTokenInStorage(cleanedRefreshToken);

        setAccessToken(cleanedAccessToken);
        setRefreshToken(cleanedRefreshToken);

        alert("로그인 성공");
        window.location.href = "/";
        }

        //수정 부분
    } catch (error: any) {
        console.error("로그인 오류", error?.response?.data);

        const message =
        error?.response?.data?.message || "로그인에 실패했습니다.";
        const code = error?.response?.data?.code;

        const customError = new Error(message);
        customError.code = code;

        throw customError;
    }
    };


    const logout = async() => {
        try {
            await postLogout();
            removeAccessTokenFromStorage()
            removeRefreshTokenFromStorage();

            setAccessToken(null);
            setRefreshToken(null);

            alert("로그아웃 성공")
        } catch (error) {
            console.error("로그아웃 오류",error);
            alert("로그아웃 실패")
        }
    }

    return (
        <AuthContext.Provider value={{ accessToken, refreshToken, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
};

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("AuthContext를 찾을 수 없습니다.")
    }

    return context;
}