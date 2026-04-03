"use client";
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import SmoothScroll from "../common/SmoothScroll"; // ലെനിസ് ഇരിക്കുന്ന ഫയൽ
import Preloader from "./Preloader";
import Footer from "./Footer";

export default function MainWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isLoading]);

  return (
    <SmoothScroll>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

      {/* Navbar & Footer common ആയി ഇവിടെ നൽകാം */}
      <div
        className={`transition-opacity duration-1000 ${isLoading ? "opacity-0" : "opacity-100"}`}
      >
        <Navbar />
        {children}
        <Footer />
      </div>
    </SmoothScroll>
  );
}
