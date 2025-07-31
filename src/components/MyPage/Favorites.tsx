import type { Perfume } from "../../types/perfume";
import SkeletonPerfumeCard from "../common/SkeletonPerfumeCard";
import MyPagePerfumeCard from "./MyPagePerfumeCard";

const Favorites: React.FC<{ isLoading?: boolean }> = ({ isLoading = false }) => {
  const firstMDChoice: Perfume[] = [
    {
      id: 1,
      imageUrl: "https://image.sivillage.com/upload/C00001/goods/org/617/230907006220617.jpg?RS=600&SP=1",
      brand: "LOIVIE",
      name: "오 드 퍼퓸 피오니 앤 화이트 머스크",
      price: 320000,
      isLiked: true,
    },
    {
      id: 2,
      imageUrl: "https://image.sivillage.com/upload/C00001/goods/org/895/231117007082895.jpg?RS=600&SP=1",
      brand: "LOIVIE",
      name: "오 드 퍼퓸 망고 앤 민트 리브",
      price: 320000,
      isLiked: false,
    },
    {
      id: 3,
      imageUrl: "https://image.sivillage.com/upload/C00001/goods/org/157/230922006452157.jpg?RS=600&SP=1",
      brand: "LOIVIE",
      name: "오 드 퍼퓸 휘그 앤 시더우드",
      price: 320000,
      isLiked: false,
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 w-full pb-7">
      {isLoading
        ? Array.from({ length: 6 }).map((_, idx) => <SkeletonPerfumeCard key={idx} />)
        : firstMDChoice.map((perfume) => <MyPagePerfumeCard key={perfume.id} perfume={perfume} />)}
    </div>
  );
};

export default Favorites;
