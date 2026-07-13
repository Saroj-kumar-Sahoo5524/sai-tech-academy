"use client";
import dynamic from "next/dynamic";
import TrustedCompanies from "@/components/home/TrustedCompanies";
import StatsSection from "@/components/home/StatsSection";
import PopularCourses from "@/components/home/PopularCourses";
import CTABanner from "@/components/home/CTABanner";
import AboutPage from "./about/page";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ServicesPage from "./services/page";
import TestimonialsPage from "./testimonials/page";

// Dynamic import for hero (contains React Three Fiber) — SSR disabled
const HeroSection = dynamic(() => import("@/components/home/HeroSection"), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen flex items-center justify-center" style={{ background: "#0B1120" }}>
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: "50%",
          border: "2px solid #4F46E5",
          borderTopColor: "transparent",
          animation: "spin 1s linear infinite",
        }}
      />
    </div>
  ),
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <div className="mt-16"><AboutPage /></div>
      <div className="mt-16"><WhyChooseUs /></div>
      <div className="mt-16"><TrustedCompanies /></div>
      {/* <div className="mt-16"><StatsSection /></div> */}
      <div className="mt-16"><ServicesPage /></div>
      <div className="mt-16"><PopularCourses /></div>
      <div className="mt-16"><TestimonialsPage /></div>
      <div className="mt-16"><CTABanner /></div>
    </>
  );
}
