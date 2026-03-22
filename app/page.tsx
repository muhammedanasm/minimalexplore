"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ComingSoon() {
  const containerRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      // Initial Fade In for the whole page
      tl.fromTo(
        containerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 2.5 },
      ).from(
        ".reveal",
        {
          y: 40,
          opacity: 0,
          duration: 1.8,
          stagger: 0.25,
        },
        "-=1.5",
      );

      // Subtle Background Zoom-out (Cinematic Effect)
      gsap.fromTo(
        bgRef.current,
        { scale: 1.15 },
        { scale: 1, duration: 6, ease: "power2.out" },
      );

      // Breathing Animation for the Red Glow
      gsap.to(".red-glow", {
        scale: 1.3,
        opacity: 0.5,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-black flex flex-col items-center justify-center font-sans text-white"
    >
      {/* Cinematic Background Image Layer */}
      <div ref={bgRef} className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop')",
          }}
        />
        {/* Deep Dark Overlay for Premium Look */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-black/95"></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Texture Overlay (Grain) */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* Subtle Red Pulse in Background */}
      <div className="red-glow absolute w-[450px] h-[450px] bg-red-600/15 rounded-full blur-[130px] z-10 pointer-events-none"></div>

      {/* Main Content Layer */}
      <div className="relative z-20 flex flex-col items-center text-center px-6">
        {/* Minimal Brand Logo */}
        <header className="reveal mb-28">
          <h1 className="text-[10px] md:text-xs font-light tracking-[1em] uppercase opacity-50">
            minimal<span className="font-bold">explore</span>
          </h1>
        </header>

        {/* Hero Typography */}
        <section className="max-w-4xl">
          <h2 className="reveal text-7xl md:text-[140px] font-medium tracking-tighter leading-none mb-10 italic">
            Soon.
          </h2>
          <p className="reveal text-gray-400 text-[10px] md:text-xs tracking-[0.4em] uppercase max-w-md mx-auto leading-loose opacity-70">
            Redefining the journey for the <br />
            <span className="text-red-600 font-semibold">modern nomad.</span>
          </p>
        </section>

        {/* Minimal Social Links */}
        <footer className="reveal mt-36 flex gap-14 text-[9px] tracking-[0.5em] uppercase font-medium">
          <a
            href="https://www.instagram.com/minimalexplore/"
            target="_blank"
            className="hover:text-red-600 transition-colors duration-700 border-b border-white/5 pb-2"
          >
            Instagram
          </a>
          <a
            href="https://wa.me/917592975363"
            target="_blank"
            className="hover:text-red-600 transition-colors duration-700 border-b border-white/5 pb-2"
          >
            WhatsApp
          </a>
        </footer>
      </div>

      {/* Aesthetic Vertical Line */}
      <div className="reveal absolute bottom-0 w-[1px] h-20 bg-gradient-to-t from-red-600/60 to-transparent"></div>
    </main>
  );
}
