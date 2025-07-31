import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import PBTISaveModal from '../../components/PBTI/PBTIResult/PBTISaveModal';
import PBTIResultHeader from '../../components/PBTI/PBTIResult/PBTIResultHeader';
import PBTIAnalysisSection from '../../components/PBTI/PBTIResult/PBTIAnalysisSection';
import PBTIPerfumeStyleSection from '../../components/PBTI/PBTIResult/PBTIPerfumeStyleSection';
import PBTIPerfumeTypeSection from '../../components/PBTI/PBTIResult/PBTIPerfumeTypeSection';
import PBTISummarySection from '../../components/PBTI/PBTIResult/PBTISummarySection';
import PBTIRecommendedPerfumesSection from '../../components/PBTI/PBTIResult/PBTIRecommendedPerfumesSection';
import PBTIActionButtons from '../../components/PBTI/PBTIResult/PBTIActionButtons';

const PBTIResultPage: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalStep, setModalStep] = useState<1 | 2>(1);
  const [perfumeName, setPerfumeName] = useState("");
  const location = useLocation();
  const { answers, result } = location.state || {};

  console.log("넘어온 answers:", answers);
  console.log("넘어온 result:", result);

  const recommendation = result.recommendation;
  const perfumeRecommends = result.perfumeRecommend;
  const keywords = result.keywords;
  const perfumeStyle = result.perfumeStyle;
  const scentPoint = result.scentPoint
  const summary = result.summary

  console.log("추천",recommendation)
  console.log("키워드",keywords)
  console.log("향수스타일",perfumeStyle)
  console.log("향수 추천", perfumeRecommends)
  console.log("향수 포인트",scentPoint)
  console.log("요약", summary)

  const handleSaveClick = () => setModalOpen(true);
  const handleSaveConfirm = () => setModalStep(2);
  const handleCloseModal = () => {
    setModalOpen(false);
    setModalStep(1);
    setPerfumeName("");
  };

  return (
    <div className="min-w-[375px] m-h-screen p-3 pb-22 bg-[#F4EEFA] flex flex-col items-center font-[Pretendard]">
      <PBTIResultHeader />
      <PBTIAnalysisSection 
        keywordArrayData={keywords}
      />
      <PBTIPerfumeStyleSection
        description={perfumeStyle.description}
        notes={perfumeStyle.notes}
      />
      <PBTIPerfumeTypeSection data={scentPoint} />
      <PBTISummarySection summary={summary}/>
      <PBTIRecommendedPerfumesSection perfumeRecommendation={perfumeRecommends} />
      <PBTIActionButtons onSaveClick={handleSaveClick} />

      {/* 모달 분리 */}
      <PBTISaveModal
        isOpen={isModalOpen}
        step={modalStep}
        perfumeName={perfumeName}
        onChange={setPerfumeName}
        onSave={handleSaveConfirm}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default PBTIResultPage;
