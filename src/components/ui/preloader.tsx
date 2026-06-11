import { useEffect, useState } from "react";

export function Preloader() {
  const [phase, setPhase] = useState<"visible" | "fading" | "done">("visible");

  useEffect(() => {
    const fadeTimer = setTimeout(() => setPhase("fading"), 800);
    const doneTimer = setTimeout(() => setPhase("done"), 1400);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-white transition-opacity duration-600 ${
        phase === "fading" ? "opacity-0" : "opacity-100"
      }`}
    >
      <img
        src="/noema-logo.png"
        alt="NOEMA Ensemble"
        className="h-24 w-auto animate-fade-in"
      />
    </div>
  );
}
