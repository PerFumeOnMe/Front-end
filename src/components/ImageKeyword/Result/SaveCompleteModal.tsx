interface SaveCompleteModalProps {
  onConfirm: () => void;
}

export default function SaveCompleteModal({
  onConfirm,
}: SaveCompleteModalProps) {
  return (
    <>
      <div className="fixed inset-0 bg-black/40" />
      <div className="fixed inset-x-0 bottom-0 mx-auto min-w-[375px] max-w-[480px] z-50 bg-white rounded-t-[16px] px-[16px] py-[16px] shadow-[0_-4px_20px_rgba(0,0,0,0.15)]">
        <h3 className="text-title3 text-grayscale-1000 text-center">
          완료되었습니다.
        </h3>
        <button
          onClick={onConfirm}
          className="w-full h-[48px] bg-main-500 hover:bg-main-600 text-title3 text-grayscale-200 rounded-[16px] mt-[32px]"
        >
          홈으로
        </button>
      </div>
    </>
  );
}
