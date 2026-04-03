"use client";
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-white px-4 md:px-6 pb-6 pt-10">
      <div className="relative w-full rounded-[40px] overflow-hidden bg-[#121212] min-h-[400px] md:min-h-[350px]">
        {/* Background Image inside Footer Card */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-30 grayscale"
          style={{
            backgroundImage: "url('/images/manali-web11.avif')",
          }}
        />

        {/* Content */}
        <div className="relative z-10 p-10 md:p-16 flex flex-col md:flex-row justify-between h-full text-white">
          <div className="max-w-xs space-y-6">
            <h2 className="text-4xl font-medium tracking-tighter uppercase">
              MinimalExplore
            </h2>
            <div className="w-12 h-[1px] bg-white/30"></div>
            <p className="text-sm font-light leading-relaxed opacity-70">
              Discover Manali through journeys that stay in your stories long
              after the snow melts.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-16 md:gap-32 mt-12 md:mt-0">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] opacity-40 mb-6">
                Navigation
              </p>
              <ul className="space-y-3 text-sm font-medium">
                {["Home", "Tours", "About", "Blog", "Gallery"].map((link) => (
                  <li
                    key={link}
                    className="hover:opacity-40 cursor-pointer transition-opacity"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] opacity-40 mb-6">
                Social
              </p>
              <ul className="space-y-3 text-sm font-medium">
                {["Instagram", "Twitter", "Youtube", "LinkedIn"].map((link) => (
                  <li
                    key={link}
                    className="hover:opacity-40 cursor-pointer transition-opacity"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="mt-8 px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] uppercase tracking-widest text-[#121212]/50 font-medium">
        <p>© 2026 Minimal Explore. All rights reserved.</p>
        <div className="flex gap-10">
          <span className="hover:text-black cursor-pointer">
            Privacy Policy
          </span>
          <span className="hover:text-black cursor-pointer">Terms</span>
        </div>
      </div>
    </footer>
  );
}
