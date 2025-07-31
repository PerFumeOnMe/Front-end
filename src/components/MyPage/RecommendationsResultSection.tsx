import MyPageRecommendationCard from "./MyPageRecommendationCard";
import SkeletonRecommendationCard from "./SkeletonRecommendationCard";

const RecommendationsResultSection: React.FC<{ isLoading?: boolean }> = ({ isLoading = false }) => {
  return (
    <div className="flex flex-col w-full">
      {isLoading
        ? Array.from({ length: 3 }).map((_, idx) => <SkeletonRecommendationCard key={idx} />)
        : <>
            <MyPageRecommendationCard />
            <MyPageRecommendationCard />
            <MyPageRecommendationCard />
          </>
      }
    </div>
  );
};


export default RecommendationsResultSection;