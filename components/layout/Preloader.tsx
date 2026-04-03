"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: onComplete,
    });

    // Percentage counter logic
    const count = { value: 0 };
    tl.to(count, {
      value: 100,
      duration: 2,
      ease: "power2.inOut",
      onUpdate: () => {
        if (counterRef.current)
          counterRef.current.innerText = Math.round(count.value) + "%";
      },
    });

    // Exit animation
    tl.to(".preloader-content", { opacity: 0, duration: 0.5 });
    tl.to(".preloader-bg", {
      yPercent: -100,
      duration: 1,
      ease: "power4.inOut",
    });
  }, [onComplete]);

  return (
    <div className="preloader-bg fixed inset-0 z-[1000] bg-[#121212] flex items-center justify-center overflow-hidden">
      <div className="preloader-content text-white flex flex-col items-center">
        <div className="overflow-hidden h-fit">
          <span className="text-sm uppercase tracking-[0.4em] opacity-40 block">
            Minimal Explore
          </span>
        </div>
        <div
          ref={counterRef}
          className="text-6xl md:text-8xl font-light tracking-tighter mt-4"
        >
          0%
        </div>
      </div>
    </div>
  );
}
