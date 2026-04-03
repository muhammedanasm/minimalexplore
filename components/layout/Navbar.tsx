"use client";
import React, { useState, useEffect } from "react";
import { Mountain, Menu, X } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // സ്ക്രോൾ ചെയ്യുമ്പോൾ Navbar സ്റ്റൈൽ മാറ്റാൻ
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // മൊബൈൽ മെനു അനിമേഷൻ (GSAP)
  useEffect(() => {
    if (isOpen) {
      gsap.to(".mobile-menu", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power4.out",
      });
      // ബോഡി സ്ക്രോൾ തടയാൻ
      document.body.style.overflow = "hidden";
    } else {
      gsap.to(".mobile-menu", {
        y: "-100%",
        opacity: 0,
        duration: 0.6,
        ease: "power4.in",
      });
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const navLinks = [
    { name: "Tours", href: "/tours" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Gallery", href: "/gallery" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 px-6 md:px-12  flex justify-between items-center ${
          isScrolled
            ? "bg-white/80 backdrop-blur-lg py-4 shadow-sm"
            : "bg-transparent py-6"
        }`}
      >
        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center gap-2 z-[110] cursor-pointer"
        >
          <Mountain size={20} className="text-[#121212]" />
          <span className="text-[16px] font-medium tracking-tighter uppercase text-[#121212]">
            Minimal Explore
          </span>
        </Link>

        {/* BASED IN (Desktop Only) */}
        <div
          className={`hidden md:block text-[11px] font-medium  tracking-[0.25em] transition-opacity duration-500 ${isScrolled ? "opacity-40" : "opacity-60 text-gray-500"}`}
        >
          Based in:{" "}
          <span className="text-[#121212] opacity-100">Manali Region</span>
        </div>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex gap-10 text-[13px] font-medium uppercase tracking-tight text-[#121212]">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:opacity-40 transition-opacity"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* MOBILE HAMBURGER BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden z-[110] p-2 text-[#121212] hover:scale-110 transition-transform"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* --- MOBILE MENU OVERLAY --- */}
      <div className="mobile-menu fixed inset-0 bg-white z-[90] flex flex-col items-center justify-center translate-y-[-100%] opacity-0 md:hidden">
        <div className="flex flex-col gap-8 text-center">
          {["Tours", "About", "Blog", "Gallery"].map((item, index) => (
            <a
              key={item}
              href="#"
              onClick={() => setIsOpen(false)}
              className="text-5xl font-medium tracking-tighter hover:italic transition-all"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Menu Footer Info */}
        <div className="absolute bottom-16 flex flex-col items-center gap-4">
          <div className="w-10 h-[1px] bg-black/20"></div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold">
            Manali, Himachal Pradesh
          </p>
        </div>
      </div>
    </>
  );
}
