const SkeletonMyPageProfileImage = () => {
    return (
        <div className="w-[100px] h-[100px] mt-4 relative animate-pulse">
            <div className="w-[100px] h-[100px] rounded-full bg-grayscale-300" />
            <div className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-grayscale-400" />
        </div>
    );
};

export default SkeletonMyPageProfileImage;
