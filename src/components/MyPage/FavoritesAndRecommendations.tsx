import { useEffect, useState } from "react";
import SortModalArrowIcon from "../../assets/MyPage/SortModalArrow.svg";
import Favorites from "./Favorites";
import RecommendationsResultSection from "./RecommendationsResultSection";
import MyPageTabButton from "./MyPageTabButton"; // 경로는 상황에 맞게 조정하세요

const FavoritesAndRecommendations: React.FC = () => {
  const [favOrRecommend, setFavOrRecommend] = useState(true);
  const [isSortModalOpen, setIsSortModalOpen] = useState(false);
  const [sortOption, setSortOption] = useState("향수공방"); // 초기 정렬 기준 텍스트
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleSortOptionClick = (option: string) => {
    setSortOption(option);
    setIsSortModalOpen(false); // 선택 후 모달 닫기
  };

  return (
    <div className="flex flex-col w-full h-full mt-5">
      <div className="flex justify-between items-center mb-3">
        {/* 탭 버튼 */}
        <div className="flex">
          <MyPageTabButton
            label="즐겨찾기"
            selected={favOrRecommend}
            onClick={() => setFavOrRecommend(true)}
          />
          <MyPageTabButton
            label="추천결과"
            selected={!favOrRecommend}
            onClick={() => setFavOrRecommend(false)}
          />
        </div>

        {/* 정렬 버튼 */}
        {!favOrRecommend && ( // 추천결과에서만 보이게
          <div className="relative">
            <button onClick={() => setIsSortModalOpen(!isSortModalOpen)}>
              <div className="flex w-23 justify-between border border-grayscale-400 bg-[#FBFBFB]/60 text-body4 text-grayscale-900 rounded-xl px-3 py-2">
                {sortOption}
                <img src={SortModalArrowIcon} alt="정렬 아이콘" className="w-4 h-4 ml-1" />
              </div>
            </button>

            {/* 드롭다운 메뉴 */}
            {isSortModalOpen && (
              <div className="absolute w-23 flex flex-col border border-grayscale-400 bg-white rounded-xl shadow-lg z-10 overflow-hidden">
                {["향수공방", "키워드", "PBTI"].map((option) => (
                  <div
                    key={option}
                    onClick={() => handleSortOptionClick(option)}
                    className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-body4 text-grayscale-900"
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {favOrRecommend
        ? <Favorites isLoading={isLoading} />
        : <RecommendationsResultSection isLoading={isLoading} />}
    </div>
  );
};

export default FavoritesAndRecommendations;
