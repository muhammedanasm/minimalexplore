"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ComingSoon({ pageName }: { pageName: string }) {
  return (
    <div className="h-screen w-full bg-[#0a0a0a] flex flex-col items-center justify-center text-white px-6">
      <span className="text-[10px] uppercase tracking-[0.5em] opacity-30 mb-8">
        {pageName}
      </span>
      <h2 className="text-7xl md:text-9xl font-light tracking-tighter italic mb-12">
        Soon.
      </h2>

      <Link
        href="/"
        className="flex items-center gap-2 text-[11px] uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity"
      >
        <ArrowLeft size={14} />
        Back to Home
      </Link>

      {/* Decorative Line */}
      <div className="absolute bottom-0 w-[1px] h-32 bg-gradient-to-t from-white/20 to-transparent"></div>
    </div>
  );
}
