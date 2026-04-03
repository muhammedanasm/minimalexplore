"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Star, MapPin, ShieldCheck, Clock } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const REVIEWS = [
  {
    id: 1,
    text: "“The best decision we made in Manali. The guides are professionals and know the hidden spots.”",
    name: "Priya M.",
    tour: "Old Manali Walk, Feb 2025",
    avatar: "https://i.pravatar.cc/150?u=priya",
  },
  {
    id: 2,
    text: "“I’ve traveled a lot, but this tour felt different — pure silence, golden light, and friendly people.”",
    name: "Sarah T.",
    tour: "Solang Sky, January 2025",
    avatar: "https://i.pravatar.cc/150?u=sarah",
  },
  {
    id: 3,
    text: "“We booked last minute and everything went perfectly. Highly recommend the Scenic Hike Trail!”",
    name: "Rohan & Sneha",
    tour: "Hike Trail, April 2025",
    avatar: "https://i.pravatar.cc/150?u=rohan",
  },
  {
    id: 4,
    text: "“From pickup to sunset — smooth, safe, and unforgettable. Already planning the next trip.”",
    name: "Daniel K.",
    tour: "River Safari, May 2025",
    avatar: "https://i.pravatar.cc/150?u=dan",
  },
];

export default function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Entrance Animation
      gsap.from(".testi-reveal", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });

      // 2. Seamless Vertical Marquee Logic
      const marquee = marqueeRef.current;
      if (marquee) {
        // yPercent: -50 ഉപയോഗിച്ചാൽ ലിസ്റ്റ് ഡബിൾ ആണെങ്കിൽ കൃത്യമായി ലൂപ്പ് ചെയ്യും
        gsap.to(marquee, {
          yPercent: -50,
          duration: 30, // വേഗത കുറയ്ക്കാൻ ഇവിടെ നമ്പർ കൂട്ടാം
          ease: "none",
          repeat: -1,
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full bg-white pt-0 pb-24 md:pb-32 px-6 md:px-16 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-16">
          <div className="flex flex-col items-start gap-6">
            <div className="testi-reveal">
              <span className="px-4 py-1.5 bg-[#F9F9F9] border border-black/[0.03] rounded-full text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">
                Testimonials
              </span>
            </div>
            <h2 className="testi-reveal text-[36px] md:text-[60px] leading-[1.05] font-normal tracking-[-0.05em] text-[#121212] max-w-xl">
              What travelers say <br /> about our tours
            </h2>
          </div>
          <div className="testi-reveal max-w-[280px]">
            <p className="text-[14px] md:text-[15px] leading-relaxed text-[#121212]/60 font-normal text-left md:text-right">
              Every journey we organize is built on trust, safety, and
              unforgettable views.
            </p>
          </div>
        </div>

        {/* --- MAIN GRID WITH FIXED HEIGHT --- */}
        <div className="flex flex-col lg:flex-row gap-5 items-stretch h-auto lg:h-[650px]">
          {/* 1. LEFT CARD */}
          <div className="testi-reveal flex-1 bg-[#F9F9F9] rounded-[35px] md:rounded-[45px] p-10 md:p-12 flex flex-col justify-between">
            <div className="space-y-10">
              <div className="flex items-end gap-2">
                <span className="text-[54px] md:text-[68px] font-normal leading-none tracking-tighter">
                  4.9
                </span>
                <span className="text-[18px] opacity-30 mb-2 font-medium">
                  /5
                </span>
                <div className="ml-4 text-[12px] leading-tight opacity-60 uppercase font-bold tracking-wider">
                  <p>Based on 280+</p>
                  <p>traveler reviews</p>
                </div>
              </div>

              <div className="space-y-5">
                {[
                  { Icon: MapPin, text: "56+ guided tours delivered" },
                  {
                    Icon: ShieldCheck,
                    text: "100% safe routes with local guides",
                  },
                  { Icon: Clock, text: "5+ years of mountain experience" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 text-[14px] font-medium opacity-80"
                  >
                    <item.Icon
                      size={18}
                      className="text-gray-400"
                      strokeWidth={2}
                    />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 space-y-6">
              <p className="text-[14px] opacity-60 font-medium leading-relaxed">
                Ready to plan your own journey? <br /> Let's get started!
              </p>
              <div className="flex items-center gap-2.5">
                <button className="bg-[#121212] text-white px-8 py-4 rounded-full text-[12px] font-bold uppercase tracking-widest">
                  Plan your trip
                </button>
                <div className="w-[50px] h-[50px] rounded-full bg-[#121212] text-white flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
                  <ArrowUpRight size={18} strokeWidth={2.5} />
                </div>
              </div>
            </div>
          </div>

          {/* 2. CENTER IMAGE CARD (Stretching fixed here) */}
          <div className="testi-reveal flex-[1.2] relative min-h-[400px] lg:h-full rounded-[35px] md:rounded-[45px] overflow-hidden group">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2070&auto=format&fit=crop')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

            <div className="absolute inset-0 p-10 md:p-12 flex flex-col justify-end text-white">
              <p className="text-[20px] md:text-[24px] leading-[1.2] font-medium tracking-tight mb-6">
                “We expected snow and silence — we found peace, stars, and
                people who love what they do.”
              </p>
              <p className="text-[11px] opacity-60 uppercase tracking-[0.2em] font-bold">
                — Amir, Mountain Sky tour, March 2025
              </p>
            </div>
          </div>

          {/* 3. RIGHT MARQUEE (Break fixed here) */}
          <div className="testi-reveal w-full lg:flex-1 relative h-[500px] lg:h-full overflow-hidden rounded-[35px] md:rounded-[45px]">
            <div ref={marqueeRef} className="flex flex-col gap-4 py-2">
              {/* Double the list for truly seamless loop */}
              {[...REVIEWS, ...REVIEWS].map((review, i) => (
                <div
                  key={i}
                  className="bg-[#F9F9F9] p-8 rounded-[35px] flex flex-col gap-6 border border-black/[0.02]"
                >
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={12} fill="black" strokeWidth={0} />
                    ))}
                  </div>
                  <p className="text-[15px] leading-[1.4] text-[#121212]/90 font-normal tracking-tight">
                    {review.text}
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      src={review.avatar}
                      className="w-11 h-11 rounded-full object-cover grayscale"
                      alt={review.name}
                    />
                    <div className="text-[12px] leading-tight">
                      <p className="font-bold text-[#121212]">{review.name}</p>
                      <p className="opacity-40 font-medium mt-0.5">
                        {review.tour}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Smooth Edge Gradients */}
            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white via-white/40 to-transparent pointer-events-none z-10" />
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
