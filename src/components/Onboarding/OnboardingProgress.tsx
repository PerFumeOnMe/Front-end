export default function OnboardingProgress({ current }: { current: number }) {
  return (
    <div className="flex justify-center gap-2">
      {[1, 2, 3].map((step) => (
        <div
          key={step}
          className={`w-2.5 h-2.5 rounded-full ${step === current ? 'bg-grayscale-900' : 'bg-grayscale-200'}`}
        />
      ))}
    </div>
  );
}
