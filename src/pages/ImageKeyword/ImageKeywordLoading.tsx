import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import mainBg from '../../assets/mainPage/main.png';

export default function ImageKeywordLoading() {
    const navigate = useNavigate();
    const location = useLocation();
    const keywords = location.state?.keywords;

    useEffect(() => {
        const timer = setTimeout(() => {
            // 임시 결과 데이터 생성
            const result = {
                keywords: keywords,
                descriptions: "세련됨은 지나치게 달지 않고 절제된 고급스러움을 의미해요.\n유니크함은 흔하지 않은 조합과 개성 있는 향의 선택을 나타내요.\n조용함은 은은한 잔향으로 감정을 차분히 채워주는 향을 말해요.\n겨울은 따뜻하고 포근한 분위기를 품은 향이 잘 어울려요.\n여성은 부드럽고 섬세한 감정을 건드리는 향을 선택했어요.",
                scenario: "창밖엔 눈이 내리고, 따뜻한 머플러에 얼굴을 묻은 채 조용한 거리를 걷고 있어요.\n바스락거리는 낙엽, 코끝에 닿는 은은한 바닐라와 우디 향, 그 속에서 세련된 당신의 분위기가 더욱 빛나요.\n사람들 속에 섞여 있지만, 뚜렷한 개성과 고요한 존재감이 느껴져요.",
                characterImageUrl: "https://example.com/character.png",
                recommendations: [
                    {
                        "brand": "메종마르지엘라1",
                        "name": "레플리카 바이 더 파이어플레이스 오 드 퍼퓸",
                        "imageUrl": "https://image.sivillage.com/upload/C00001/goods/org/617/230907006220617.jpg?RS=600&SP=1",
                        "topNote": "핑크 페퍼, 오렌지 블로섬, 클로브",
                        "middleNote": "체스트넛, 과일 향, 통카빈",
                        "baseNote": "바닐라, 페루 발삼, 캐시미어 우드",
                        "description": "따뜻하고 조용한 불향. 포근한 겨울을 닮은 독특한 분위기",
                        "relatedKeywords": ["세련된", "조용한", "유니크한"]
                    },
                    {
                        "brand": "메종마르지엘라2",
                        "name": "레플리카 바이 더 파이어플레이스 오 드 퍼퓸",
                        "imageUrl": "https://image.sivillage.com/upload/C00001/goods/org/895/231117007082895.jpg?RS=600&SP=1",
                        "topNote": "핑크 페퍼, 오렌지 블로섬, 클로브",
                        "middleNote": "체스트넛, 과일 향, 통카빈",
                        "baseNote": "바닐라, 페루 발삼, 캐시미어 우드",
                        "description": "따뜻하고 조용한 불향. 포근한 겨울을 닮은 독특한 분위기",
                        "relatedKeywords": ["세련된", "조용한", "유니크한"]
                    },
                    {
                        "brand": "메종마르지엘라3",
                        "name": "레플리카 바이 더 파이어플레이스 오 드 퍼퓸",
                        "imageUrl": "https://image.sivillage.com/upload/C00001/goods/org/157/230922006452157.jpg?RS=600&SP=1",
                        "topNote": "핑크 페퍼, 오렌지 블로섬, 클로브",
                        "middleNote": "체스트넛, 과일 향, 통카빈",
                        "baseNote": "바닐라, 페루 발삼, 캐시미어 우드",
                        "description": "따뜻하고 조용한 불향. 포근한 겨울을 닮은 독특한 분위기",
                        "relatedKeywords": ["세련된", "조용한", "유니크한"]
                    }
                ]
            };

            navigate('/image-keyword/result', {
                state: { result }
            });
        }, 3000);

        return () => clearTimeout(timer);
    }, [navigate, keywords]);

    return (
        <div className="w-full min-w-[375px] max-w-[480px] min-h-screen relative overflow-hidden">
            <div className="absolute inset-0 w-[200%] animate-slide-bg">
                <img 
                    src={mainBg} 
                    alt="배경 이미지"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative w-full h-full flex flex-col items-center justify-center -mt-[100px]">
                <p className="text-title1 text-white mb-[24px]">
                    김진성님의 이미지를
                </p>
                <p className="text-title1 text-white">
                    파악중이에요
                </p>
            </div>
        </div>
    );
} 