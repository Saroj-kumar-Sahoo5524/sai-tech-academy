"use client";
import { motion } from "framer-motion";
import Testimonials from "@/components/home/Testimonials";

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-[#0B1120] pb-24 overflow-hidden" style={{ paddingTop: "7rem" }}>
      {/* Page Header */}
      <section className="relative py-10 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-indigo-500/8 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-cyan-500/6 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-300 text-sm font-medium mb-4">
              Student Stories
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-outfit mb-4 leading-tight">
              What Our <span className="gradient-text">Students Say</span>
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Real success stories from students who transformed their careers at Sai Tech Academy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Slider */}
      <Testimonials />
    </main>
  );
}
