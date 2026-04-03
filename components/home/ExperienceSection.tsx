"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function ExperienceSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading staggered reveal
      gsap.from(".exp-reveal", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Images fade up with stagger
      gsap.from(".exp-img-card", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".exp-images-grid",
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const manaliImages = [
    "/images/manali-web8.avif",
    "/images/manali-web6.avif",
    "/images/manali-web7.avif",
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white pt-0 pb-24 md:pb-32 px-6 md:px-16 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* --- TOP ROW: BADGE & HEADLINE --- */}
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-20 mb-20">
          <div className="exp-reveal">
            <span className="px-4 py-1.5 bg-[#F9F9F9] border border-black/[0.03] rounded-full text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">
              Experience
            </span>
          </div>

          <h2 className="exp-reveal text-[34px] md:text-[54px] leading-[1.05] font-normal tracking-[-0.05em] text-[#121212] max-w-5xl">
            With a love for nature and exploration, we create{" "}
            <span className="text-gray-400">meaningful routes</span> that
            inspire, connect, and stay forever in memory.
          </h2>
        </div>

        {/* --- MIDDLE ROW: THREE IMAGES --- */}
        {/* <div className="exp-images-grid flex flex-col md:flex-row gap-4 md:gap-5 mb-16">
          {manaliImages.map((img, i) => (
            <div
              key={i}
              className="exp-img-card flex-1 h-[300px] md:h-[420px] rounded-[32px] md:rounded-[40px] overflow-hidden group"
            >
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                style={{ backgroundImage: `url(${img})` }}
              />
            </div>
          ))}
        </div> */}
        {/* --- MIDDLE ROW: THREE IMAGES --- */}
        <div className="exp-images-grid flex flex-col md:flex-row gap-6 md:gap-5 mb-16">
          {manaliImages.map((img, i) => (
            <div
              key={i}
              className="exp-img-card w-full h-[350px] md:h-[420px] md:flex-1 rounded-[32px] md:rounded-[40px] overflow-hidden group"
            >
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                style={{ backgroundImage: `url(${img})` }}
              />
            </div>
          ))}
        </div>

        {/* --- BOTTOM ROW: SUBTEXT & BUTTONS --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
          <div className="exp-reveal max-w-sm">
            <p className="text-[17px] md:text-[19px] leading-[1.35] text-[#121212] font-normal tracking-tight">
              Would you like to explore more routes or customize this trip for
              your group?
            </p>
          </div>

          <div className="exp-reveal flex items-center gap-2.5">
            <button className="bg-[#121212] text-white px-9 py-4 rounded-full text-[13px] font-bold uppercase tracking-widest hover:opacity-90 transition-opacity">
              See Our Gallery
            </button>
            <div className="w-[52px] h-[52px] rounded-full bg-[#121212] text-white flex items-center justify-center hover:scale-105 transition-transform cursor-pointer">
              <ArrowUpRight size={20} strokeWidth={2.5} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
