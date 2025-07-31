import { useState } from "react";
import OnboardingLayout from "../../components/Onboarding/OnboardingLayout";
import BottomButton from "../../components/common/BottomButton";
import ScentCard from "../../components/common/ScentCard"; 
import { scentOptions } from "../../types/scentOptions";
import toast, { Toaster } from "react-hot-toast";
import { AiOutlineExclamation } from "react-icons/ai";
import GoBackIcon from "../../assets/MyPage/GoBackArrowButton.svg"
import { useNavigate } from "react-router-dom";

export default function EditScentPreferences() {
  const navigate = useNavigate()
  const [selected, setSelected] = useState<string[]>([]);
  const toggle = (id: string) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((s) => s !== id));
    } else if (selected.length < 3) {
      setSelected([...selected, id]);
    } else {
    toast.custom((t) => (
      <div className="fixed bottom-20 w-full">
        <div
          className={`${t.visible ? "animate-enter" : "animate-leave"} mx-auto w-full max-w-[448px] bg-grayscale-1000-f2 text-white rounded-2xl py-4 px-5 flex items-center`}
        >
          <div className="flex items-center justify-center gap-3 w-full">
            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-white flex items-center justify-center">
              <AiOutlineExclamation className="w-4 h-4 text-grayscale-1000-f2" />
            </div>
            <span className="text-center text-body3">
              선호하는 향은 3개까지만 설정이 가능합니다.
            </span>
          </div>
        </div>
      </div>
    ));
    }
  };

  return (
    <OnboardingLayout>
      <div className="min-h-screen h-full pb-16 font-[Pretandard]">
        <Toaster position="bottom-center" />
  
        <div className="w-full px-4 mx-auto mt-[22px]">
          <div className="flex flex-col items-center relative">
            <div className="flex justify-center items-center">
              <button onClick={() => (window.location.href = "/mypage")} className="hover: cursor-pointer">
                <img src={GoBackIcon} className="absolute top-0 left-0 pl-2" />
              </button>
              <div className="text-title3 text-grayscale-1000 ">
                선호하는 향 수정
              </div>
            </div>
            <div className="text-grayscale-1000 text-title3 mt-3 ">
              선호하는 향을 3가지 선택해 주세요.
            </div>
          </div>
  
          <div className="mt-6 mb-6 grid grid-cols-3 gap-x-3 gap-y-4">
            {scentOptions.map(({ id, png, description }) => (
              <ScentCard
                key={id}
                id={id}
                png={png}
                description={description}
                selected={selected.includes(id)}
                onClick={() => toggle(id)}
              />
            ))}
          </div>
        </div>
  
        <div className="pb-3 w-full">
          <BottomButton
            disabled={selected.length !== 3}
            onClick={() => (navigate("/mypage"))}
          >
            수정하기
          </BottomButton>
        </div>
      </div>
    </OnboardingLayout>
  );
}