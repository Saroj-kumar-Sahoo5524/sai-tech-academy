"use client";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import LearningRoadmap from "@/components/home/LearningRoadmap";

export default function WhyUsPage() {
  return (
    <main className="min-h-screen bg-[#0B1120] overflow-hidden" style={{ paddingTop: '7rem' }}>
      {/* Why Choose Us Section */}
      <WhyChooseUs />
      
      {/* Learning Roadmap Section */}
      <LearningRoadmap />
    </main>
  );
}
