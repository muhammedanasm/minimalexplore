"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Award,
  MapPin,
  MessageSquare,
  ShieldCheck,
  Globe,
  Route,
  Instagram,
  Linkedin,
  AtSign,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const BADGES = [
  { icon: Award, text: "5+ Years of Experience" },
  { icon: MapPin, text: "Local Experts" },
  { icon: MessageSquare, text: "Support" },
  { icon: ShieldCheck, text: "Certified Mountain Tours" },
  { icon: Globe, text: "Multilanguages" },
  { icon: Route, text: "Safe Routes" },
];

export default function GuidesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance reveal matching the premium style
      gsap.from(".guide-reveal", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white pt-0 pb-24 md:pb-32 px-6 md:px-16 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* --- 1. TOP BADGES GRID (Exact 3x2 alignment from screenshot) --- */}
        <div className="guide-reveal grid grid-cols-2 md:grid-cols-3 gap-y-3 gap-x-2 w-fit mb-15">
          {BADGES.map((badge, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 px-5 py-2.5 bg-[#F9F9F9] rounded-full border border-black/[0.03] w-fit"
            >
              <badge.icon size={13} className="text-[#121212] opacity-40" />
              <span className="text-[12px] md:text-[13px] font-medium text-[#121212] opacity-80 tracking-tight whitespace-nowrap">
                {badge.text}
              </span>
            </div>
          ))}
        </div>

        {/* --- 2. MAIN TWO-COLUMN LAYOUT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-stretch">
          {/* LEFT COLUMN: LARGE TEAM CARD */}
          <div className="guide-reveal bg-[#F9F9F9] rounded-[45px] md:rounded-[55px] p-8 md:p-10 flex flex-col md:flex-row gap-10 items-center">
            {/* Team Image (Vertical orientation like screenshot) */}
            <div className="w-full md:w-[48%] aspect-[4/5] rounded-[35px] overflow-hidden shadow-sm">
              <img
                src="/images/manali-web9.avif"
                className="w-full h-full object-cover  hover:grayscale-0 transition-all duration-700"
                alt="Manali Guides Team"
              />
            </div>

            <div className="w-full md:w-[52%] flex flex-col justify-between self-stretch py-4">
              <div>
                <h3 className="text-[26px] md:text-[30px] leading-[1.15] font-medium tracking-tight text-[#121212] mb-6">
                  Step inside a journey guided by passion and experience
                </h3>
                <p className="text-[14px] md:text-[15px] leading-relaxed text-[#121212]/40 font-normal pr-4">
                  Each tour is led by people who know every trail, story, and
                  sunrise of Manali — guides who turn every route into a journey
                  worth remembering.
                </p>
              </div>

              {/* Social Icons (Exact Circle Style) */}
              <div className="flex gap-2.5 mt-10">
                {[Instagram, AtSign, Linkedin].map((Icon, i) => (
                  <div
                    key={i}
                    className="w-11 h-11 rounded-full bg-black/[0.04] flex items-center justify-center text-[#121212] hover:bg-black hover:text-white transition-all cursor-pointer"
                  >
                    <Icon size={17} strokeWidth={2} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: HEADLINE & FOUNDER INFO (Vertical alignment) */}
          <div className="flex flex-col justify-between py-2">
            {/* Section Heading with Exact Satoshi Typography */}
            <div className="guide-reveal mb-12 md:mb-0">
              <h2 className="text-[52px] md:text-[52px] leading-[0.85] font-normal tracking-[-0.06em] text-[#121212] mb-5">
                Meet Your <br /> Mountain Guides
              </h2>
            </div>

            {/* Founder Sub-section (Aligning image left and text right) */}
            <div className="guide-reveal flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12 pr-4">
              <div className="w-[200px] md:w-[260px] aspect-[4/5] rounded-[35px] overflow-hidden shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop"
                  className="w-full h-full object-cover"
                  alt="Lead Guide"
                />
              </div>

              <div className="flex-1 space-y-6">
                <span className="px-4 py-1.5 bg-[#F9F9F9] rounded-full text-[10px] font-bold uppercase tracking-[0.3em] text-[#121212]/30">
                  Founder
                </span>
                <p className="text-[19px] md:text-[22px] leading-[1.3] font-medium tracking-tight text-[#121212] max-w-[320px]">
                  “Every trip is personal. We keep groups small to make sure
                  your experience feels private, safe, and unforgettable.”
                </p>
                <p className="text-[12px] md:text-[13px] text-[#121212]/30 font-bold uppercase tracking-[0.1em] whitespace-nowrap">
                  — Muhammed Rafi, Founder & Lead Guide
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
