import { useState } from "react";
import type { Perfume } from "../../types/perfume";
import { addToFavorites, removeFromFavorites } from "../../apis/Fragrance";
import heartFilledImage from "../../assets/MainPage/heart_filled.png";
import heartEmptyImage from "../../assets/MainPage/heart_empty.png";

interface PerfumeCardProps {
    perfume: Perfume;
}

const PerfumeCard = ({ perfume }: PerfumeCardProps) => {
    const { imageUrl, brand, name, price, isLiked: initialIsLiked } = perfume;
    const [isLiked, setIsLiked] = useState(initialIsLiked);
    
    const handleLikeClick = async (e: React.MouseEvent) => {
        e.preventDefault(); // 버블링 방지
        if (!isLiked) {
            try {
                await addToFavorites(perfume.id);
                setIsLiked(true);
            } catch (error) {
                console.error('Failed to add to favorites:', error);
            }
        }else {
            try {
                await removeFromFavorites(perfume.id);
                setIsLiked(false);
            } catch (error) {
                console.error('Failed to remove from favorites:', error);
            }
        }
    };

    return (
        <div className="flex flex-col">
            <div className="relative mb-[9px]">
                <img 
                    src={imageUrl} 
                    alt={name} 
                    className="w-full aspect-[14/15] bg-grayscale-200 rounded-[8px] object-cover border border-[1px] border-grayscale-200"
                />
                <button 
                    onClick={handleLikeClick}
                    className="absolute bottom-[9px] right-[8px]"
                >
                    <img 
                        src={isLiked ? heartFilledImage : heartEmptyImage}
                        alt="좋아요"
                        className="w-[20px] h-[20px]"
                    />
                </button>
            </div>
            <p className="text-caption2 text-grayscale-800 mb-[-2]">{brand}</p>
            <p className="text-body3 text-grayscale-1000 mb-[-2]">{name}</p>
            <p className="text-body4 text-grayscale-900">{price}원~</p>
        </div>
    );
};

export default PerfumeCard; 