"use client";
import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const buttonRef = useRef<HTMLAnchorElement>(null); // Type added here

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.8) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isVisible) {
      gsap.to(buttonRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power4.out",
        display: "flex",
      });
    } else {
      gsap.to(buttonRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.4,
        ease: "power4.in",
        // ബ്രേസസ് {} ഉപയോഗിക്കുന്നതോടെ റിട്ടേൺ ഇഷ്യൂ ഒഴിവാകും
        onComplete: () => {
          gsap.set(buttonRef.current, { display: "none" });
        },
      });
    }
  }, [isVisible]);

  return (
    <a
      ref={buttonRef}
      href="https://wa.me/917592975363"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[99] hidden items-center gap-3 bg-white text-[#121212] p-2 pr-6 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.1)] border border-black/5 hover:scale-105 transition-transform duration-300 group"
      style={{ opacity: 0, transform: "translateY(50px)" }}
    >
      <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-lg">
        <MessageCircle size={20} fill="currentColor" />
      </div>
      <div className="flex flex-col">
        <span className="text-[10px] uppercase tracking-widest font-bold opacity-40 leading-none mb-1">
          Chat with us
        </span>
        <span className="text-[13px] font-semibold tracking-tight">
          WhatsApp
        </span>
      </div>

      {/* Ping Effect Animation */}
      <span className="absolute top-2 left-2 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-[#25D366]"></span>
      </span>
    </a>
  );
}
