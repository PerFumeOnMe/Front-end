const SkeletonRecommendationCard = () => {
  return (
    <div className="w-full flex flex-col bg-main-10 py-5 px-6 animate-pulse">
      <div className="h-3 w-[60px] bg-gray-300 rounded mb-2" />
      <div className="h-4 w-[200px] bg-gray-300 rounded" />
    </div>
  );
};

export default SkeletonRecommendationCard;
