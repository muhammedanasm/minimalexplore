"use client";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import ContactForm from "@/components/home/ContactForm";
import ExperienceSection from "@/components/home/ExperienceSection";
import ExploreSection from "@/components/home/ExploreSection";
import FaqSection from "@/components/home/FaqSection";
import GuidesSection from "@/components/home/GuidesSection";
import Hero from "@/components/home/Hero";
import PlanningSection from "@/components/home/PlanningSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ToursSection from "@/components/home/ToursSection";
import VideoSection from "@/components/home/VideoSection";
// മറ്റ് സെക്ഷനുകൾ (Explore, Tours) പിന്നീട് ഇവിടെ ആഡ് ചെയ്യാം

export default function Home() {
  return (
    <>
      <Hero />
      <ExploreSection />
      <ToursSection />
      <ExperienceSection />
      <VideoSection />
      <PlanningSection />
      <TestimonialsSection />
      <GuidesSection />
      <FaqSection />
      <ContactForm />

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
    </>
  );
}
