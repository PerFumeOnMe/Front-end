import { useState, useRef, useEffect } from "react";

interface SaveNameModalProps {
  onSubmit: (name: string) => void;
  onClose: () => void;
}

export default function SaveNameModal({
  onSubmit,
  onClose,
}: SaveNameModalProps) {
  const [name, setName] = useState("");
  const modalRef = useRef<HTMLDivElement>(null);

  const isNameValid = name.trim().length > 0;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <>
      <div className="fixed inset-0 bg-black/40" />
      <div
        ref={modalRef}
        className="fixed inset-x-0 bottom-0 mx-auto min-w-[375px] max-w-[480px] z-50 bg-white rounded-t-[16px] px-[16px] py-[16px] shadow-[0_-4px_20px_rgba(0,0,0,0.15)]"
      >
        <div className="bg-white rounded-[24px]">
          <h3 className="text-title2 text-center text-grayscale-1000 mb-[16px]">
            향수 이름 입력
          </h3>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="이름을 입력하세요."
            className="w-full h-[44px] px-[20px] border border-grayscale-900 rounded-[8px] text-body2 mt-[16px]"
          />
          <button
            onClick={() => {
              if (isNameValid) {
                onSubmit(name.trim());
              }
            }}
            disabled={!isNameValid}
            className={`w-full h-[48px] rounded-[16px] text-title3 mt-[32px] transition-all duration-200 ${
              isNameValid
                ? "bg-main-500 text-grayscale-200 hover:bg-main-600 cursor-pointer"
                : "bg-grayscale-400 text-grayscale-600 cursor-not-allowed"
            }`}
          >
            저장
          </button>
        </div>
      </div>
    </>
  );
}
