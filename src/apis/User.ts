import axios from "axios";
import {
    type RequestSigninDto,
    type RequestSignupDto,
    type ResponseSignupDto,
    type ResponseSigninDto,
    type SigninResponseWithToken,
    type RequestUserNotesDto,
    type ResponseUserNotesDto,
    type RequestUserProfileImageDto,
    type ResponseUserProfileImageDto,
    type ResponseUserInfoDto,
    type RequestUserFavoritesListDto,
    type ResponseUserFavoritesListDto,
} from "../types/apis/User";
import { axiosInstance } from "./axios";
import {
  MOCK_LOGIN_SUCCESS,
  MOCK_LOGIN_FAIL_ID,
  MOCK_LOGIN_FAIL_PASSWORD
} from "../constants/mock/Login"; 


/// 로그인 
// export const postSignin = async ( body : RequestSigninDto ):Promise<SigninResponseWithToken> => {
//     const res = await axiosInstance.post("/auth/login", body);
//     const data = res.data.result
//     const accessToken = res.headers['authorization']?.split(" ")[1]
    
//     return {
//         accessToken,
//         data
//     };
// };
    // 임시 로그인
    export const postSignin = async (body: RequestSigninDto) => {
    if (body.loginId !== "umc123") throw MOCK_LOGIN_FAIL_ID;
    if (body.password !== "asdf1234") throw MOCK_LOGIN_FAIL_PASSWORD;

    return MOCK_LOGIN_SUCCESS; 
    };


/// 로그 아웃
export const postLogout = async () => {
    const { data } = await axiosInstance.post("/users/logout");

    return data;
}

/// 회원가입
export const postSignup = async ( body : RequestSignupDto ):Promise<ResponseSignupDto> => {
    const { data } = await axiosInstance.post(
        '/users/signup',
        body,
    );

    return data;
};

// 유저 선호 향 수정 API
export const patchUserNotes = async ( body : RequestUserNotesDto ):Promise<ResponseUserNotesDto> => {
    const { data } = await axiosInstance.patch(
        '/users/me/notes',
        body,
    );

    return data;
};

// 프로필 사진 변경 API
export const patchUserProfileImage = async ( body : RequestUserProfileImageDto ):Promise<ResponseUserProfileImageDto> => {
    const { data } = await axiosInstance.patch(
        '/users/me/image',
        body,
    );

    return data;
};

// 프로필 조회 API
export const getUserInfo = async ():Promise<ResponseUserInfoDto> => {
    const { data } = await axiosInstance.get(
        '/users/me'
    )

    return data
}

// 회원탈퇴 API
export const deleteUserAccount = async () => {
    const { data } = await axiosInstance.delete(
        '/users/me'
    )

    return data
}

// 즐겨찾기 목록 조회 API
export const getFavoritesList = async ( body : RequestUserFavoritesListDto ):Promise<ResponseUserFavoritesListDto> => {
    const { data } = await axiosInstance.get(
        '/users/me', {
            params : body
        }
    )

    return data
}