import { useEffect, useState } from "react";
import Banner from "../components/MainPage/Banner";
import PerfumeGrid from "../components/MainPage/PerfumeGrid";
import type { Perfume } from "../types/perfume";
import { getMdChoice, getTrending } from "../apis/Fragrance";
import ChatBotButton from '../components/MainPage/ChatBotButton';
import { useAuth } from "../context/AuthContext";

const MainPage = () => {
    const { accessToken } = useAuth();
    
    const [MdChoice, setMdChoice] = useState<Perfume[]>([]);
    const [userName, setUserName] = useState<string>("");
    const [nickName, setNickName] = useState<string>("");
    const [trending, setTrending] = useState<Perfume[]>([]);

    const firstMDChoice: Perfume[] = [
        {
            id: 1,
            imageUrl: "https://image.sivillage.com/upload/C00001/goods/org/617/230907006220617.jpg?RS=600&SP=1",
            brand: "LOIVIE",
            name: "오 드 퍼퓸 피오니 앤 화이트 머스크",
            price: 320000,
            isLiked: true
        },
        {
            id: 2,
            imageUrl: "https://image.sivillage.com/upload/C00001/goods/org/895/231117007082895.jpg?RS=600&SP=1",
            brand: "LOIVIE",
            name: "오 드 퍼퓸 망고 앤 민트 리브",
            price: 320000,
            isLiked: false
        },
        {
            id: 3,
            imageUrl: "https://image.sivillage.com/upload/C00001/goods/org/157/230922006452157.jpg?RS=600&SP=1",
            brand: "LOIVIE",
            name: "오 드 퍼퓸 휘그 앤 시더우드",
            price: 320000,
            isLiked: false
        }
    ];

    const secondMDChoice: Perfume[] = [
        {
            id: 4,
            imageUrl: "https://image.sivillage.com/upload/C00001/goods/org/617/230907006220617.jpg?RS=600&SP=1",
            brand: "LOIVIE",
            name: "오 드 퍼퓸 피오니 앤 화이트 머스크",
            price: 320000,
            isLiked: true
        },
        {
            id: 5,
            imageUrl: "https://image.sivillage.com/upload/C00001/goods/org/895/231117007082895.jpg?RS=600&SP=1",
            brand: "LOIVIE",
            name: "오 드 퍼퓸 망고 앤 민트 리브",
            price: 320000,
            isLiked: false
        },
        {
            id: 6,
            imageUrl: "https://image.sivillage.com/upload/C00001/goods/org/157/230922006452157.jpg?RS=600&SP=1",
            brand: "LOIVIE",
            name: "오 드 퍼퓸 휘그 앤 시더우드",
            price: 320000,
            isLiked: false
        }
    ];
    
    
    
    
    useEffect(() => {
        const fetchData = async () => {
            setMdChoice(firstMDChoice);
            setUserName("김진성");
            setNickName("칠성");
            setTrending(secondMDChoice);
        }
        fetchData()
    }, [])

    /*useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getMdChoice();
                setMdChoice(data.result.content);
                setUserName(data.result.name);
                setNickName(data.result.nickname);
                const trendingData = await getTrending();
                setTrending(trendingData.result);
            } catch (error) {
                console.error('Failed to fetch:', error);
            }
        };
        fetchData();
    }, [accessToken]); */

    return (
        <div className="min-h-screen bg-white font-[Pretendard] pb-[80px]">
            <Banner userName={userName} />
            <div className="relative -mt-[16px] rounded-t-[16px] bg-white pt-[16px]">
                <h2 className="text-title3 mb-[7px] px-[16px]">{userName}님이 좋아할만한 향수</h2>
                <PerfumeGrid perfumes={MdChoice} />
                <h2 className="text-title3 mb-[7px] pt-[32px] px-[16px]">요즘 뜨는 향수</h2>
                <PerfumeGrid perfumes={trending} />
            </div>
            <ChatBotButton />
        </div>
    );
};

export default MainPage;
