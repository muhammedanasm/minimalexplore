"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  Camera,
  Mountain,
  Sun,
  MapPin,
  ShieldCheck,
  Car,
  Route,
} from "lucide-react";

export default function Hero() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Initial Image Zoom Out
      gsap.fromTo(
        imageRef.current,
        { scale: 1.2 },
        { scale: 1, duration: 2.5, ease: "power3.out" },
      );

      // 2. Heading Reveal
      gsap.from(".reveal", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: "power4.out",
        delay: 0.5,
      });

      // 3. UI Elements Fade Up
      gsap.from(".fade-up", {
        y: 30,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "power2.out",
        delay: 1.2,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[100vh] bg-white flex flex-col p-4 md:p-6 pt-20 md:pt-20 font-sans antialiased"
    >
      {/* --- NAVBAR --- */}

      {/* --- MAIN HERO CARD --- */}
      <div className="relative flex-1 w-full rounded-[40px] overflow-hidden group">
        {/* Background Image Container */}
        <div
          ref={imageRef}
          className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/hero.webp')",
            }}
          />
          {/* Subtle Overlays */}
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-500"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative h-full w-full flex flex-col justify-end p-8 md:p-10 text-white">
          {/* Main Headline */}
          <div className="mt-12 md:mt-20 max-w-5xl">
            <h1 className="text-[42px] md:text-[92px] leading-[0.85] font-satoshi tracking-[-0.05em]">
              <div className="overflow-hidden h-fit">
                <span className="reveal block">Explore the Best</span>
              </div>
              <div className="overflow-hidden h-fit">
                <span className="reveal block">Natural Places</span>
              </div>
            </h1>
          </div>

          {/* Bottom Interface Bar */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1.5fr_1.9fr] items-end gap-10">
            {/* 1. Left: Scenic Stats & Icons */}
            <div className="hidden md:grid fade-up grid-cols-1 md:grid-cols-[auto_auto] items-start md:items-center gap-4">
              <div className="text-[13px] leading-tight font-medium tracking-tight order-2 md:order-1">
                <p>20+ Scenic</p>
                <p className="opacity-60">Spots Included</p>
              </div>

              <div className="grid grid-flow-col items-center gap-1.5 bg-white/10 backdrop-blur-md p-1.5 rounded-full border border-white/20 order-1 md:order-2">
                {[Camera, Mountain, Sun, MapPin].map((Icon, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-white/10 grid place-items-center"
                  >
                    <Icon size={12} strokeWidth={2} />
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Middle: Thin Separator Line */}
            <div className="fade-up hidden lg:block mx-20 h-[1px] bg-white/20 relative top-[-10px]"></div>

            {/* 3. Right: Description and Pills */}
            <div className="grid gap-6 text-right">
              <p className="fade-up text-[15px] md:text-[17px] leading-[1.4] font-light opacity-80 pl-2 sm:pl-6 md:pl-14 lg:pl-[173px] text-left pt-5 md:pt-0">
                We organize scenic tours, photo stops, and guided routes to the
                most beautiful natural spots, with clear schedules, and simple
                booking.
              </p>

              <div className="fade-up flex flex-wrap items-baseline justify-start gap-2.5 sm:grid sm:grid-flow-col sm:auto-cols-max sm:justify-end">
                {[
                  { label: "Private Trips", icon: ShieldCheck },
                  { label: "Transport Included", icon: Car },
                  { label: "Custom Route", icon: Route },
                ].map((item, idx) => (
                  <span
                    key={idx}
                    className="grid grid-flow-col items-center gap-2 px-5 py-2.5 border border-white/30 rounded-full text-[11px] tracking-widest backdrop-blur-md bg-white/5 hover:bg-white hover:text-black transition-all duration-500 cursor-pointer"
                  >
                    <item.icon size={12} />
                    {item.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
