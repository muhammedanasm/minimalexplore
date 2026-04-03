"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Play, Pause } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function VideoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Heading and Subtext Reveal
      gsap.from(".video-reveal", {
        y: 50,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // 2. Video Card Scale/Fade animation
      gsap.from(cardRef.current, {
        scale: 0.95,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white pt-0 pb-24 md:pb-32 px-6 md:px-16 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* --- HEADER ROW --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-16">
          <div className="flex flex-col items-start gap-8">
            <div className="video-reveal">
              <span className="px-4 py-1.5 bg-[#F9F9F9] border border-black/[0.03] rounded-full text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">
                Video Tour
              </span>
            </div>
            <h2 className="video-reveal text-[38px] md:text-[60px] leading-[1.05] font-normal tracking-[-0.05em] text-[#121212] max-w-xl">
              Experience the mountains in motion
            </h2>
          </div>

          <div className="video-reveal max-w-[280px]">
            <p className="text-[14px] md:text-[15px] leading-relaxed text-[#121212]/60 font-normal text-left md:text-right">
              A short look at what you’ll see and feel during our guided tours
              in Manali.
            </p>
          </div>
        </div>

        {/* --- MAIN VIDEO CARD --- */}
        <div
          ref={cardRef}
          onClick={togglePlay}
          className="relative w-full aspect-video md:h-[650px] rounded-[35px] md:rounded-[48px] overflow-hidden group cursor-pointer shadow-sm bg-black"
        >
          {/* HTML5 Video Element */}
          <video
            ref={videoRef}
            src="/videos/manali.mp4"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              isPlaying ? "opacity-100" : "opacity-0"
            }`}
            loop
            playsInline
          />

          {/* Video Placeholder Image (Shows when not playing) */}
          <div
            className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 group-hover:scale-105 ${
              isPlaying ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1596440856024-e740bc753443?q=80&w=2070&auto=format&fit=crop')",
            }}
          />

          {/* Overlays */}
          <div
            className={`absolute inset-0 bg-black/20 transition-opacity duration-700 ${isPlaying ? "opacity-0" : "opacity-100"}`}
          />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] pointer-events-none z-10" />

          {/* Central Play/Pause Button */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div
              className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center text-black shadow-2xl transition-all duration-500 ${isPlaying ? "opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100" : "opacity-100 scale-100"}`}
            >
              {isPlaying ? (
                <Pause size={24} fill="currentColor" strokeWidth={0} />
              ) : (
                <Play
                  size={24}
                  fill="currentColor"
                  strokeWidth={0}
                  className="ml-1"
                />
              )}
            </div>
          </div>

          {/* Content inside: 95% Stats (Fades out on play) */}
          <div
            className={`absolute top-10 right-10 md:top-16 md:right-16 text-white text-right transition-all duration-700 ${isPlaying ? "opacity-0 -translate-y-4" : "opacity-100 translate-y-0"}`}
          >
            <h3 className="text-[60px] md:text-[90px] font-normal leading-none tracking-tighter mb-2">
              95%
            </h3>
            <p className="text-[13px] md:text-[15px] font-light leading-tight opacity-90 max-w-[200px] ml-auto tracking-tight">
              Guests say they felt truly connected to nature.
            </p>
          </div>

          {/* Content inside: Bottom Left Text (Fades out on play) */}
          <div
            className={`absolute bottom-10 left-10 md:bottom-16 md:left-16 text-white max-w-[280px] transition-all duration-700 ${isPlaying ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}
          >
            <p className="text-[13px] md:text-[15px] font-light leading-relaxed opacity-80 tracking-tight">
              Every visit leaves something behind — <br />
              calm, wonder, and a story to tell.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
