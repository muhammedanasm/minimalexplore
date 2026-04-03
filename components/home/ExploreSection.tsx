"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function ExploreSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animation for all elements
      gsap.from(".reveal-explore", {
        y: 50,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full bg-white py-24 md:py-32 px-6 md:px-16 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-start gap-12 md:gap-20">
        {/* --- LEFT COLUMN --- */}
        <div className="w-full lg:w-[32%] flex flex-col items-start">
          <div className="reveal-explore mb-8">
            <span className="px-4 py-1.5 bg-[#F9F9F9] border border-black/[0.03] rounded-full text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">
              Explore
            </span>
          </div>

          <h2 className="reveal-explore text-[26px] md:text-[36px] leading-[1.1] font-normal tracking-[-0.04em] text-[#121212] mb-12">
            Discover beautiful routes and{" "}
            <span className="text-gray-400">scenic spots</span> across
            Manali&apos;s natural landscapes.
          </h2>

          <div className="reveal-explore flex items-center gap-2.5">
            <button className="bg-[#121212] text-white px-9 py-4 rounded-full text-[13px] font-bold uppercase tracking-widest hover:opacity-90 transition-opacity">
              Start your trip
            </button>
            <div className="w-[52px] h-[52px] rounded-full bg-[#121212] text-white flex items-center justify-center hover:scale-105 transition-transform cursor-pointer">
              <ArrowUpRight size={20} strokeWidth={2.5} />
            </div>
          </div>
        </div>

        {/* --- RIGHT COLUMN (Image Cards) --- */}
        <div className="w-full lg:w-[68%] flex flex-col md:flex-row gap-6 items-stretch">
          {/* Card 1: See real moments */}
          <div className="reveal-explore relative flex-1 rounded-[35px] md:rounded-[45px] overflow-hidden aspect-[1/1.2] md:aspect-auto group">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
              style={{
                backgroundImage: "url('/images/manali-web4.avif')",
              }}
            />
            <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:bg-black/5" />

            <div className="absolute inset-0 p-10 flex flex-col justify-end">
              <div className="flex justify-between items-end">
                <p className="text-white text-[20px] md:text-[20px] leading-[1.2] font-medium tracking-tight max-w-[160px]">
                  See real moments from our trips.
                </p>
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-black shadow-lg hover:scale-110 transition-transform">
                  <ArrowUpRight size={20} strokeWidth={2.5} />
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Nature Path / Description */}
          <div className="reveal-explore flex-1 flex flex-col gap-8">
            <div className="relative flex-1 rounded-[35px] md:rounded-[45px] overflow-hidden group min-h-[300px]">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                style={{
                  backgroundImage: "url('/images/manali-web5.avif')",
                }}
              />
              <div className="absolute top-8 right-8">
                <span className="px-5 py-2.5 border border-white/30 rounded-full text-[11px] uppercase tracking-widest text-white backdrop-blur-md font-medium">
                  Nature Path
                </span>
              </div>
            </div>

            <div className="px-2 md:px-0">
              <p className="text-[17px] md:text-[18px] leading-[1.4] text-[#121212]/50 font-normal tracking-tight text-center md:text-left">
                Every route reveals new perspectives — from snow-capped peaks to
                quiet valleys waiting to be explored.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
