import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import PerfumeOnMeCharacter from '../../assets/common/character.png';
import PBTIQuestionCard from '../../components/PBTI/PBTIQuestion/PBTIQuestionCard';
import { PBTIQuestions, type PBTIQuestionType } from "../../constants/PBTI/questions";
import { postPBTIResult } from '../../apis/PBTI';
import type { RequestPbtiQuestion } from '../../types/apis/PBTI';

const questions: PBTIQuestionType[] = PBTIQuestions;

const PBTIQuestionPage: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  const handleSelect = async (optionIdx: number) => {
    const updatedAnswers = [...answers, optionIdx];
    setAnswers(updatedAnswers);

    if (currentIdx < questions.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      // 마지막 질문 완료 - API 전송
      console.log(updatedAnswers)
      setIsSubmitting(true);
      /*
      try {
        // API 요청 body 구성
        const requestBody: RequestPbtiQuestion = {
            qOne: updatedAnswers[0].toString(),
            qTwo: updatedAnswers[1].toString(),
            qThree: updatedAnswers[2].toString(),
            qFour: updatedAnswers[3].toString(),
            qFive: updatedAnswers[4].toString(),
            qSix: updatedAnswers[5].toString(),
            qSeven: updatedAnswers[6].toString(),
            qEight: updatedAnswers[7].toString(),
        };

        const result = await postPBTIResult(requestBody);

        console.log("조회 결과", result)
        
        // 결과와 함께 결과 페이지로 이동
        navigate('/PBTI/result', { 
          state: { 
            answers: updatedAnswers,
            result: result 
          } 
        });
      } catch (error) {
        console.error('PBTI 제출 실패:', error);
        alert('결과 처리 중 오류가 발생했습니다. 다시 시도해주세요.');
        setIsSubmitting(false);
      }
      */
      const requestBody: RequestPbtiQuestion = {
              qOne: updatedAnswers[0].toString(),
              qTwo: updatedAnswers[1].toString(),
              qThree: updatedAnswers[2].toString(),
              qFour: updatedAnswers[3].toString(),
              qFive: updatedAnswers[4].toString(),
              qSix: updatedAnswers[5].toString(),
              qSeven: updatedAnswers[6].toString(),
              qEight: updatedAnswers[7].toString(),
          };
      
          const result = {
        savedName: "감각적인 미니멀리스트",
        recommendation: "당신에게는 깨끗하면서도 독특한 향이 잘 어울려요.",
        keywords: [
          {
            keyword: "미니멀",
            keywordDescription: "불필요한 것을 덜어내고 본질에 집중하는 당신에게 어울리는 향이에요."
          },
          {
            keyword: "감각적",
            keywordDescription: "섬세한 감각으로 주변을 바라보는 당신에게 어울리는 향이에요."
          },
          {
            keyword: "도회적",
            keywordDescription: "세련되고 도시적인 무드를 지닌 당신을 표현해요."
          }
        ],
        perfumeStyle: {
          description: "차분하고 세련된 무드를 자아내는 향수 스타일",
          notes: [
            {
              category: "시트러스",
              categoryDescription: "상큼하고 청량한 인상을 주는 톱 노트"
            },
            {
              category: "머스크",
              categoryDescription: "포근하고 은은한 베이스 노트로 여운을 남겨요"
            }
          ]
        },
        scentPoint: [
          {
            category: "우디",
            point: 4
          },
          {
            category: "플로럴",
            point: 2
          },
          {
            category: "프루티",
            point: 1
          },
          {
            category: "시트러스",
            point: 5
          }
        ],
        summary: "당신은 본질에 집중하면서도 섬세한 감각을 지닌 사람입니다. 향수에서도 간결하고 정제된 스타일을 선호하며, 상큼하고 은은한 향이 잘 어울려요.",
        perfumeRecommend: [
          {
            name: "Another 13",
            brand: "Le Labo",
            description: "깨끗하고 인공적인 느낌이 독특하게 어우러진 향",
            perfumeImageUrl: "https://example.com/images/another13.jpg"
          },
          {
            name: "Not a Perfume",
            brand: "Juliette Has a Gun",
            description: "단일 분자로 이루어진 미니멀한 향수, 은은한 머스크 베이스",
            perfumeImageUrl: "https://example.com/images/notaperfume.jpg"
          },
          {
            name: "Molecule 01",
            brand: "Escentric Molecules",
            description: "개인의 체취와 어우러져 독특하게 발현되는 향수",
            perfumeImageUrl: "https://example.com/images/molecule01.jpg"
          }
        ]
      };
      
      setTimeout(() => {
        navigate('/PBTI/result', { 
          state: { 
            answers: updatedAnswers,
            result: result 
          } 
        });
      }, 2000); // 2000ms = 2초
          }
  };

  const currentQuestion = questions[currentIdx];

  return (
    <div className="min-w-[375px] h-screen -mb-20 bg-[#F4EEFA] flex flex-col items-center font-[Pretendard] overflow-hidden">
      <img src={PerfumeOnMeCharacter} className="w-[238px] h-[238px] mt-16" />

      <div className="w-full flex justify-center px-4">
        <AnimatePresence mode="wait">
          <PBTIQuestionCard
            progress={currentIdx}
            question={currentQuestion.question}
            options={currentQuestion.options}
            onSelect={handleSelect}
          />
        </AnimatePresence>
      </div>

      {/* 로딩 상태 표시 */}
      {isSubmitting && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-10">
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <div className="flex flex-col items-center gap-3">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-main-500"></div>
              <p className="text-body3 text-grayscale-800">결과를 분석하고 있어요...</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PBTIQuestionPage;