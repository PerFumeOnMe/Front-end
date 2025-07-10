export default function BottomButton({
  text,
  onClick,
  disabled = false,
}: {
  text: string;
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full px-4 py-3 rounded-2xl text-title-3 text-grayscale-200 ${
        disabled ? 'bg-grayscale-500 cursor-not-allowed' : 'bg-main-500'
      }`}
    >
      {text}
    </button>
  );
}

