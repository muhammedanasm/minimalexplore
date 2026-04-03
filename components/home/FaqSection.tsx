"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, ArrowDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const FAQ_DATA = [
  {
    question: "What should I pack for a Manali trip?",
    answer:
      "It depends on the season. In winter, heavy woolens, thermals, and waterproof boots are essential. In summer, light woolens for evenings and comfortable walking shoes are recommended.",
  },
  {
    question: "Is pickup and drop-off from Bhuntar included?",
    answer:
      "Yes, we provide pickup and drop-off services from Bhuntar Airport and the Manali Bus Stand for all our premium packages.",
  },
  {
    question: "Are the treks suitable for beginners?",
    answer:
      "Absolutely! We have specially curated trails like the Jogini Falls and Old Manali walks that are perfect for beginners and families.",
  },
  {
    question: "What happens in case of heavy snowfall?",
    answer:
      "Safety is our priority. If a route is blocked due to heavy snow, we offer alternative scenic routes or reschedule the tour at no extra cost.",
  },
  {
    question: "How can I book or cancel my tour?",
    answer:
      "You can book directly through our website or WhatsApp. For cancellations made 48 hours before the trip, we provide a full refund.",
  },
];

export default function FaqSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal header items
      gsap.from(".faq-reveal", {
        y: 50,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });

      // Reveal FAQ list items
      gsap.from(".faq-item", {
        x: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".faq-list",
          start: "top 85%",
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
        {/* --- 1. HEADER ROW --- */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-20">
          <div className="faq-reveal">
            <span className="px-4 py-1.5 bg-[#F9F9F9] border border-black/[0.03] rounded-full text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">
              FAQ
            </span>
          </div>
          <h2 className="faq-reveal text-[32px] md:text-[42px] leading-[1.1] font-normal tracking-[-0.05em] text-[#121212] max-w-4xl md:text-right">
            Everything you need to know before your mountain{" "}
            <br className="hidden lg:block" /> journey — from booking to what to
            pack.
          </h2>
        </div>

        {/* --- 2. MAIN CONTENT GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-start">
          {/* LEFT: CONTACT IMAGE CARD (Exact Design) */}
          <div className="faq-reveal lg:col-span-4 relative rounded-[35px] md:rounded-[45px] overflow-hidden aspect-[4/3] lg:aspect-[1/1.1] group shadow-sm">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
              style={{
                backgroundImage: "url('/images/manali-web10.avif')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

            <div className="absolute inset-0 p-10 flex flex-col justify-end text-white">
              <h3 className="text-[24px] md:text-[28px] font-medium tracking-tight mb-4">
                Didn&apos;t see your question?
              </h3>
              <p className="text-[14px] md:text-[15px] leading-relaxed opacity-70 mb-8 max-w-[240px]">
                Our team is here to help — just reach out and we&apos;ll reply
                shortly.
              </p>
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-black shadow-lg hover:scale-110 transition-transform">
                <ArrowUpRight size={20} strokeWidth={2.5} />
              </div>
            </div>
          </div>

          {/* RIGHT: FAQ ACCORDION LIST */}
          <div className="faq-list lg:col-span-8 flex flex-col gap-3">
            {FAQ_DATA.map((item, index) => (
              <div key={index} className="faq-item group">
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex items-center justify-between p-7 md:p-7 bg-[#F9F9F9] rounded-[20px] md:rounded-[24px] transition-all hover:bg-[#F2F2F2] text-left"
                >
                  <span className="text-[17px] md:text-[20px] font-medium text-[#121212] tracking-tight">
                    {item.question}
                  </span>
                  <div
                    className={`transition-transform duration-500 ${openIndex === index ? "rotate-180" : ""}`}
                  >
                    <ArrowDown
                      size={18}
                      className="text-[#121212] opacity-60"
                    />
                  </div>
                </button>

                {/* Animated Answer Section */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? "max-h-[200px] opacity-100 mt-1" : "max-h-0 opacity-0"}`}
                >
                  <div className="p-8 pt-2 text-[15px] md:text-[16px] text-[#121212]/60 leading-relaxed font-normal bg-[#F9F9F9] rounded-b-[24px]">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
