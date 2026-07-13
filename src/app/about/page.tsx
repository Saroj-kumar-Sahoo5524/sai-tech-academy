"use client";
import { motion } from "framer-motion";
import StatsSection from "@/components/home/StatsSection";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0B1120] pb-24 overflow-hidden" style={{ paddingTop: '7rem' }}>
      {/* Hero Header */}
      <section className="relative py-10 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-cyan-500/8 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-4">
              About Sai Tech Academy
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-outfit mb-4 leading-tight">
              Empowering Careers, <span className="gradient-text">Shaping Futures</span>
            </h1>
            <p className="text-slate-400 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed text-center">
              We are a premier IT training institute dedicated to bridging the gap between academic learning and industry demands.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story & Story Content */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Story text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-white font-outfit">Our Story</h2>
              <p className="text-slate-300 leading-relaxed">
                Founded with a vision to provide top-quality technical education, Sai Tech Academy has grown into a leading IT training center. Over the past 4+ years, we have nurtured and guided 50+ of students, helping them transition into successful IT professionals.
              </p>
              <p className="text-slate-300 leading-relaxed">
                We specialize in industry-aligned training programs, focusing heavily on hands-on practical implementation. Our courses are designed and continually updated in collaboration with working IT professionals to ensure relevancy in today&apos;s fast-changing tech landscape.
              </p>
              <div className="pt-4">
                <blockquote className="border-l-4 border-indigo-500 pl-4 py-1 italic text-slate-400">
                  &ldquo;Education is not just about learning facts, but training the mind to think.&rdquo;
                </blockquote>
              </div>
            </motion.div>

            {/* Visual highlights */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
            >
              <div className="glass-card rounded-3xl p-5 sm:p-6 border border-white/5 hover:border-indigo-500/20 transition-all duration-300">
                <div className="text-4xl mb-3">🎓</div>
                <h3 className="text-white font-bold font-outfit text-lg mb-1">Expert Mentors</h3>
                <p className="text-slate-400 text-xs leading-relaxed">Learn from industry veterans with years of experience.</p>
              </div>
              <div className="glass-card rounded-3xl p-5 sm:p-6 border border-white/5 hover:border-indigo-500/20 transition-all duration-300">
                <div className="text-4xl mb-3">🛠️</div>
                <h3 className="text-white font-bold font-outfit text-lg mb-1"><span className="mr-2">100%</span>Practical</h3>
                <p className="text-slate-400 text-xs leading-relaxed">Hands-on practice through live projects and case studies.</p>
              </div>
              <div className="glass-card rounded-3xl p-5 sm:p-6 border border-white/5 hover:border-indigo-500/20 transition-all duration-300">
                <div className="text-4xl mb-3">💼</div>
                <h3 className="text-white font-bold font-outfit text-lg mb-1"><span className="mr-2">100%</span>Job Ready</h3>
                <p className="text-slate-400 text-xs leading-relaxed">Job support, interview prep, resume grooming.</p>
              </div>
              <div className="glass-card rounded-3xl p-5 sm:p-6 border border-white/5 hover:border-indigo-500/20 transition-all duration-300">
                <div className="text-4xl mb-3">👥</div>
                <h3 className="text-white font-bold font-outfit text-lg mb-1">Small Batches</h3>
                <p className="text-slate-400 text-xs leading-relaxed">Personalized attention and guidance for every student.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section integration */}
      <StatsSection />

      {/* Mission & Vision */}
      <section className="py-20 relative bg-[#0F172A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-3xl p-8 border border-white/5 hover:border-indigo-400/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-2xl mb-6">
                🎯
              </div>
              <h3 className="text-2xl font-bold text-white font-outfit mb-4">Our Mission</h3>
              <p className="text-slate-300 leading-relaxed text-sm">
                To deliver high-impact, career-transforming IT training programs that empower learners with high-demand tech skills, fostering self-reliance, professional growth, and alignment with modern industry challenges.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card rounded-3xl p-8 border border-white/5 hover:border-cyan-400/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-2xl mb-6">
                👁️
              </div>
              <h3 className="text-2xl font-bold text-white font-outfit mb-4">Our Vision</h3>
              <p className="text-slate-300 leading-relaxed text-sm">
                To be recognized globally as a premier destination for technology learning and talent transformation, known for our practical pedagogical excellence, industry integrations, and student success track record.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
