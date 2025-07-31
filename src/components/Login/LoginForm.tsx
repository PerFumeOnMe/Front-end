import { useState } from "react";
import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import LoginTitle from "./LoginTitle";
import LoginInput from "./LoginInput";
import LoginErrorMessage from "./LoginErrorMessage";
import LoginButton from "./LoginButton";
import Divider from "./Divider";
import SocialLogin from "./SocialLogin";
import SignupGuide from "./SignupGuide";
import LoginBg from "../../assets/Login/LoginBg.png";
import { postSignin } from "../../apis/User";
import { useAuth } from "../../context/AuthContext";

export default function LoginForm() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [inputId, setInputId] = useState<string>("");
  const [inputPassword, setInputPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleLoginSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      await login({ loginId : inputId, password : inputPassword});
      setErrorMessage("");
      navigate("/", { replace: true });
      //수정 부분
      }catch (error: any) {
    const message = error?.message || "로그인에 실패했습니다.";

    const errorCode = error?.code; 

    if (errorCode === "MEMBER4003") {
      setErrorMessage("등록되지 않은 아이디입니다.");
    } else if (errorCode === "MEMBER4002") {
      setErrorMessage("비밀번호가 올바르지 않습니다.");
    } else {
      setErrorMessage(message);
    }

    console.error("로그인 실패:", message);
  }
    

    /*
    try {
      const { accessToken, data } = await postSignin({ loginId : inputId, password : inputPassword});
      const refreshToekn = data.refreshToken
      
      console.log("해더 엑세스 토큰? : ", accessToken)
      console.log("데이터? : ", refreshToekn)
      
      localStorage.setItem( "accessToken", accessToken )
      localStorage.setItem( "refreshToekn", refreshToekn )
    
      setErrorMessage("");
      localStorage.setItem("isLoggedIn", "true");
      navigate("/", { replace: true });
    } catch (error) {
      alert(error?.message);
    }*/

    {/*
    if (inputId !== "UMC"){
      setErrorMessage("등록되지 않은 아이디입니다.");
      return;
    } else if (inputPassword !== "1234"){
      setErrorMessage("비밀번호가 올바르지 않습니다.");
      return
    } else {
      setErrorMessage("");
      localStorage.setItem("isLoggedIn", "true");
      navigate("/", { replace: true });
    };*/}
  
  }

  return (
    <main className="w-screen h-screen flex items-center justify-center">
      <section className="relative w-120 min-w-[375px] min-h-screen   flex flex-col justify-center">
          <img
          src={LoginBg}
          alt="로그인 배경"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="relative z-10 w-full px-4 mx-auto my-auto">
          <LoginTitle />
            <form onSubmit={handleLoginSubmit} className="w-full flex flex-col items-center gap-4 pb-4">
              <LoginInput
                type="text"
                placeholder="아이디 입력하기"
                value={inputId}
                onChange={(e) => setInputId(e.target.value)}
              />
              <LoginInput
                type="password"
                placeholder="비밀번호 입력하기"
                value={inputPassword}
                onChange={(e) => setInputPassword(e.target.value)}
              />
              <div className="w-full text-left">
                <LoginErrorMessage message={errorMessage} />
              </div>
              <LoginButton />
              <Divider />
            </form>

          <SocialLogin />
          <SignupGuide />
        </div>
      </section>
    </main>
  );
}
