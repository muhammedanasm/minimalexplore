"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Mail, Phone } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function ContactForm() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance reveal
      gsap.from(".form-reveal", {
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
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        {/* --- LEFT SIDE: INFO --- */}
        <div className="flex-1 flex flex-col items-start justify-between py-4">
          <div className="space-y-10">
            <div className="form-reveal">
              <span className="px-4 py-1.5 bg-[#F9F9F9] border border-black/[0.03] rounded-full text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">
                Contact
              </span>
            </div>

            <h2 className="form-reveal text-[48px] md:text-[84px] leading-[0.95] font-normal tracking-[-0.06em] text-[#121212]">
              Ready to start <br /> your journey?
            </h2>

            <p className="form-reveal text-[17px] md:text-[19px] leading-relaxed text-[#121212]/50 font-normal max-w-md">
              Tell us about your dream Manali escape and let our local experts
              handle the rest.
            </p>
          </div>

          {/* Contact Details List */}
          <div className="form-reveal mt-16 space-y-6">
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-11 h-11 rounded-full bg-[#F9F9F9] flex items-center justify-center transition-colors group-hover:bg-[#121212] group-hover:text-white">
                <Mail size={18} />
              </div>
              <span className="text-[16px] font-medium tracking-tight">
                hello@minimalexplore.com
              </span>
            </div>
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-11 h-11 rounded-full bg-[#F9F9F9] flex items-center justify-center transition-colors group-hover:bg-[#121212] group-hover:text-white">
                <Phone size={18} />
              </div>
              <span className="text-[16px] font-medium tracking-tight">
                +91 98765 43210
              </span>
            </div>
          </div>
        </div>

        {/* --- RIGHT SIDE: PREMIUM FORM --- */}
        <div className="form-reveal flex-[1.2] bg-[#F9F9F9] rounded-[40px] md:rounded-[55px] p-8 md:p-16">
          <form
            ref={formRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12"
          >
            {/* Field: Name */}
            <div className="flex flex-col gap-3">
              <label className="text-[11px] uppercase tracking-[0.2em] font-bold text-gray-400">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Ex: Amir Al-Qatifi"
                className="bg-transparent border-b border-black/[0.1] pb-4 outline-none text-[18px] font-medium tracking-tight focus:border-black transition-colors"
              />
            </div>

            {/* Field: Email */}
            <div className="flex flex-col gap-3">
              <label className="text-[11px] uppercase tracking-[0.2em] font-bold text-gray-400">
                Email Address
              </label>
              <input
                type="email"
                placeholder="yourname@gmail.com"
                className="bg-transparent border-b border-black/[0.1] pb-4 outline-none text-[18px] font-medium tracking-tight focus:border-black transition-colors"
              />
            </div>

            {/* Field: Travelers */}
            <div className="flex flex-col gap-3">
              <label className="text-[11px] uppercase tracking-[0.2em] font-bold text-gray-400">
                Number of Travelers
              </label>
              <input
                type="number"
                placeholder="2 People"
                className="bg-transparent border-b border-black/[0.1] pb-4 outline-none text-[18px] font-medium tracking-tight focus:border-black transition-colors"
              />
            </div>

            {/* Field: Preferred Month */}
            <div className="flex flex-col gap-3">
              <label className="text-[11px] uppercase tracking-[0.2em] font-bold text-gray-400">
                Preferred Month
              </label>
              <select className="bg-transparent border-b border-black/[0.1] pb-4 outline-none text-[18px] font-medium tracking-tight focus:border-black transition-colors appearance-none cursor-pointer">
                <option>December (Snow Season)</option>
                <option>May (Summer Peak)</option>
                <option>September (Monsoon End)</option>
                <option>Other</option>
              </select>
            </div>

            {/* Field: Message */}
            <div className="flex flex-col gap-3 md:col-span-2 mt-4">
              <label className="text-[11px] uppercase tracking-[0.2em] font-bold text-gray-400">
                Tell us about your trip
              </label>
              <textarea
                rows={3}
                placeholder="Any special requests or specific places you want to visit?"
                className="bg-transparent border-b border-black/[0.1] pb-4 outline-none text-[18px] font-medium tracking-tight focus:border-black transition-colors resize-none"
              />
            </div>

            {/* Submit Button Section */}
            <div className="md:col-span-2 flex items-center justify-end gap-3 mt-10">
              <button
                type="submit"
                className="bg-[#121212] text-white px-10 py-5 rounded-full text-[13px] font-bold uppercase tracking-widest hover:opacity-90 transition-opacity"
              >
                Send Request
              </button>
              <div className="w-14 h-14 rounded-full bg-[#121212] text-white flex items-center justify-center hover:scale-105 transition-transform cursor-pointer">
                <ArrowUpRight size={22} strokeWidth={2.5} />
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
