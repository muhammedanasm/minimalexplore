"use client";
import { ReactLenis, useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    // GSAP ScrollTrigger-നെ Lenis-മായി ബന്ധിപ്പിക്കുന്നു
    gsap.registerPlugin(ScrollTrigger);

    if (lenis) {
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);
    }

    // പേജ് മാറുമ്പോൾ ടോപ്പിലേക്ക് സ്ക്രോൾ ചെയ്യാൻ
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }

    return () => {
      gsap.ticker.remove((time) => {
        lenis?.raf(time * 1000);
      });
    };
  }, [pathname, lenis]);

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
