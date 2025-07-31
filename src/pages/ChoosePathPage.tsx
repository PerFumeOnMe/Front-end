import { useNavigate } from 'react-router-dom';
import choosePageImage from "../assets/MainPage/choose_page_image.png";

const ChoosePathPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#F4EEFA] to-[#FBFBFB] flex items-center">
            <div className="w-full px-[16px] flex flex-col items-center">
                {/* 이미지 */}
                <img 
                    src= {choosePageImage}
                    alt="선택 페이지 이미지" 
                    className="w-[361px] h-[361px] mb-[20px]"
                />

                {/* 텍스트 */}
                <h1 className="text-title3 text-grayscale-800 text-center mb-[36px]">
                    {/* 김성섭 부분 나중에 {name}으로 뱌꾸기 */}
                    김진성님에게 어울리는 향수를 찾고싶어요!<br/>
                    어떠한 경로를 이용하시겠어요?
                </h1>

                {/* 버튼들 */}
                <div className="w-full flex flex-col gap-[16px] items-center text-title3 text-grayscale-200">
                    <button 
                        onClick={() => navigate('/image-keyword')}
                        className="w-full h-[48px] bg-main-500 rounded-[16px]"
                    >
                        이미지 키워드
                    </button>
                    <button 
                        onClick={() => navigate('/lab')}
                        className="w-full h-[48px] bg-main-500 rounded-[16px]"
                    >
                        온라인 향수 공방
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChoosePathPage;