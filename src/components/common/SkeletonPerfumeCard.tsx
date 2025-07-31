const SkeletonPerfumeCard = () => {
  return (
    <div className="flex flex-col animate-pulse">
      <div className="w-full aspect-[14/15] bg-gray-200 rounded-[8px] mb-[9px]" />
      <div className="h-3 w-1/2 bg-gray-300 rounded mb-1" />
      <div className="h-4 w-full bg-gray-300 rounded mb-1" />
      <div className="h-3 w-[80%] bg-gray-200 rounded" />
    </div>
  );
};

export default SkeletonPerfumeCard;
