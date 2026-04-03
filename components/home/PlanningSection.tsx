"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Check } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function PlanningSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // General Reveal
      gsap.from(".plan-reveal", {
        y: 60,
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
      className="w-full bg-white pt-0 pb-24 md:pb-32 px-6 md:px-16 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* --- HEADER ROW --- */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-20">
          <div className="plan-reveal">
            <span className="px-4 py-1.5 bg-[#F9F9F9] border border-black/[0.03] rounded-full text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">
              Ready
            </span>
          </div>
          <h2 className="plan-reveal text-[34px] md:text-[54px] leading-[1.1] font-normal tracking-[-0.05em] text-[#121212] max-w-4xl md:text-right">
            Plan your visit with confidence — from weather tips to what to pack
            for your{" "}
            <span className="text-gray-400 text-nowrap">
              mountain adventure.
            </span>
          </h2>
        </div>

        {/* --- MAIN CONTENT GRID --- */}
        <div className="flex flex-col lg:flex-row items-stretch gap-6 md:gap-8">
          {/* 1. Left Image Card */}
          <div className="plan-reveal relative flex-[1.2] rounded-[32px] md:rounded-[40px] overflow-hidden aspect-[4/3] lg:aspect-auto group">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2070&auto=format&fit=crop')",
              }}
            />
            <div className="absolute inset-0 bg-black/10" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <div className="flex justify-between items-end">
                <p className="text-white text-[20px] md:text-[22px] leading-tight font-medium tracking-tight max-w-[180px]">
                  See real moments from our trips.
                </p>
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-black shadow-lg">
                  <ArrowUpRight size={20} strokeWidth={2.5} />
                </div>
              </div>
            </div>
          </div>

          {/* 2. Center Phone Mockup Card */}
          {/* <div className="plan-reveal flex-1 bg-[#F9F9F9] rounded-[32px] md:rounded-[40px] flex items-end justify-center overflow-hidden min-h-[450px] pt-12">
            <div className="relative w-[280px] h-full bg-white rounded-t-[40px] border-[6px] border-[#121212] border-b-0 p-4 shadow-2xl"> */}
          {/* Phone Notch */}
          {/* <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#121212] rounded-full" /> */}
          <div className="plan-reveal bg-[#F9F9F9] rounded-[35px] md:rounded-[45px] flex items-end justify-center overflow-hidden min-h-[450px] pt-16 px-6">
            <div className="relative w-full max-w-[260px] h-[390px] md:h-full bg-white rounded-t-[35px] border-[5px] border-[#121212] border-b-0 p-4 shadow-2xl">
              {/* Notch */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-[#121212] rounded-full" />

              {/* Chat Bubbles */}
              <div className="mt-12 space-y-4">
                <div className="bg-[#121212] text-white p-3 rounded-2xl rounded-tr-sm text-[11px] ml-auto max-w-[80%] leading-snug">
                  Good morning! Ready for tomorrow&apos;s mountain trek?
                </div>
                <div className="bg-[#F0F0F0] text-[#121212] p-3 rounded-2xl rounded-tl-sm text-[11px] mr-auto max-w-[80%] leading-snug">
                  Almost ready! What should I bring with me? 👌
                </div>
                <div className="bg-[#121212] text-white p-3 rounded-2xl rounded-tr-sm text-[11px] ml-auto max-w-[80%] leading-snug">
                  Just water, a heavy jacket, and trekking shoes — mornings are
                  very cold! :)
                </div>
              </div>

              {/* Bottom Image Blur in Phone */}
              <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-10" />
              <img
                src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=500"
                className="absolute bottom-0 left-0 w-full opacity-20"
                alt="bg"
              />
            </div>
          </div>

          {/* 3. Right Checklist & Buttons */}
          <div className="plan-reveal flex-1 flex flex-col justify-center py-8">
            <div className="max-w-sm space-y-8">
              <p className="text-[16px] md:text-[17px] leading-relaxed text-[#121212]/70">
                We&apos;ve gathered the most useful tips for first-time visitors
                — from seasonal packing to how to prepare for Manali&apos;s
                terrain.
              </p>

              <ul className="space-y-4">
                {[
                  "Layered clothes — cold nights, sunny days.",
                  "Carry thermals, gloves, and sunscreen.",
                  "Private airport pick-up on request.",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-[14px] text-[#121212] font-medium"
                  >
                    <Check
                      size={16}
                      className="mt-0.5 text-gray-400"
                      strokeWidth={3}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-2.5 pt-4">
                <button className="bg-[#121212] text-white px-9 py-4 rounded-full text-[13px] font-bold uppercase tracking-widest hover:opacity-90 transition-opacity">
                  View Tours
                </button>
                <div className="w-[52px] h-[52px] rounded-full bg-[#121212] text-white flex items-center justify-center hover:scale-105 transition-transform cursor-pointer">
                  <ArrowUpRight size={20} strokeWidth={2.5} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
