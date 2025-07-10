import { ReactNode } from "react";

export default function OnboardingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full max-w-[480px] min-w-[375px] mx-auto flex flex-col justify-between min-h-screen bg-white">
      {children}
    </div>
  );
}



