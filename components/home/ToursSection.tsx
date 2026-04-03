"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const TOURS_DATA = [
  {
    id: 1,
    title: "Solang Valley Trip",
    price: "2,499",
    image: "/images/manali.avif",
    icon: <ArrowUpRight size={18} strokeWidth={2.5} />,
  },
  {
    id: 2,
    title: "Rohtang Pass Snow",
    price: "4,500",
    image: "/images/manali-web.avif",
    icon: <ArrowUpRight size={18} strokeWidth={2.5} />,
  },
  {
    id: 3,
    title: "Old Manali Walk",
    price: "1,200",
    image: "/images/manali-web2.avif",
    icon: <ArrowRight size={18} strokeWidth={2.5} />,
  },
  {
    id: 4,
    title: "Beas River Side",
    price: "3,200",
    image: "/images/manali-web3.avif",
    icon: <ArrowUpRight size={18} strokeWidth={2.5} />,
  },
];

export default function ToursSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading reveal
      gsap.from(".tours-reveal", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
      });

      // Cards staggered reveal
      gsap.from(".tour-card", {
        y: 80,
        opacity: 0,
        duration: 1.5,
        stagger: 0.1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".tours-grid",
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
        {/* --- SECTION HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="tours-reveal mb-8">
              <span className="px-4 py-1.5 bg-[#F9F9F9] border border-black/[0.03] rounded-full text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">
                Our Tours
              </span>
            </div>
            <h2 className="tours-reveal text-[38px] md:text-[64px] leading-[1.05] font-normal tracking-[-0.05em] text-[#121212]">
              Find your perfect <br /> mountain experience
            </h2>
          </div>

          <div className="tours-reveal flex items-center gap-2.5">
            <button className="bg-[#121212] text-white px-9 py-4 rounded-full text-[13px] font-bold uppercase tracking-widest hover:opacity-90 transition-opacity">
              See All Tours
            </button>
            <div className="w-[52px] h-[52px] rounded-full bg-[#121212] text-white flex items-center justify-center hover:scale-105 transition-transform cursor-pointer">
              <ArrowUpRight size={20} strokeWidth={2.5} />
            </div>
          </div>
        </div>

        {/* --- TOURS GRID --- */}
        <div className="tours-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-3">
          {TOURS_DATA.map((tour) => (
            <div
              key={tour.id}
              className="tour-card group relative h-[450px] md:h-[520px] rounded-[20px] md:rounded-[25px] overflow-hidden cursor-pointer"
            >
              {/* Image with subtle zoom on hover */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                style={{ backgroundImage: `url(${tour.image})` }}
              />

              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent transition-opacity group-hover:opacity-80" />

              {/* Top-Right Arrow Button (White) */}
              <div className="absolute top-8 right-8">
                <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center text-black transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12 shadow-md">
                  {tour.icon}
                </div>
              </div>

              {/* Bottom Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <h3 className="text-[24px] md:text-[26px] font-medium tracking-tight mb-2">
                  {tour.title}
                </h3>
                <div className="flex items-center gap-1 opacity-90">
                  <span className="text-[13px] font-light">₹</span>
                  <span className="text-[18px] font-bold">{tour.price}</span>
                  <span className="text-[12px] font-light opacity-60 ml-0.5">
                    / per person
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
