"use client";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Get Started",
    description: "Join a Free Demo Session & Enroll in our Training courses.",
    icon: "🚀",
    color: "from-indigo-500 to-blue-600",
  },
  {
    number: "02",
    title: "Course Completion",
    description: "Complete your chosen course either in Offline or Online mode.",
    icon: "📖",
    color: "from-blue-500 to-cyan-600",
  },
  {
    number: "03",
    title: "Project Completion",
    description: "Complete the live projects assigned by the trainers.",
    icon: "💎",
    color: "from-cyan-500 to-teal-600",
  },
  {
    number: "04",
    title: "Mock Interview",
    description: "Attend mock interview sessions with our Placement team & trainers.",
    icon: "🎯",
    color: "from-teal-500 to-emerald-600",
  },
  {
    number: "05",
    title: "Grooming Session",
    description: "Resume Preparation, Group Discussion, Personality Test.",
    icon: "✨",
    color: "from-emerald-500 to-green-600",
  },
  {
    number: "06",
    title: "Get Job Ready",
    description: "Get Job Ready in your dream job & sharpen your career.",
    icon: "🤝",
    color: "from-purple-500 to-indigo-600",
  },
];

export default function LearningRoadmap() {
  return (
    <section id="training_program" className="py-24 bg-[#0F172A] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium mb-4">
            Learning Journey
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-outfit mb-4">
            How Our <span className="gradient-text">Training Program</span> Works
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto text-center">
            A structured, step-by-step journey from enrollment to getting your dream job.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative glass-card rounded-3xl p-8 border border-white/5 hover:border-indigo-400/30 transition-all duration-300 hover:-translate-y-2 h-full flex flex-col"
            >
              {/* Step number */}
              <div className={`absolute -top-4 -left-2 w-12 h-12 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                {step.number}
              </div>

              {/* Icon */}
              <div className="text-3xl mb-4 mt-3">{step.icon}</div>

              {/* Content */}
              <h3 className="text-lg font-bold text-white font-outfit mb-2 group-hover:text-indigo-300 transition-colors">
                {step.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed flex-1">{step.description}</p>

              {/* Connector line (hidden on last in row and third column items) */}
              {(i + 1) % 3 !== 0 && i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-indigo-400/40 to-transparent" />
              )}

              <div className={`mt-5 h-0.5 w-0 group-hover:w-full bg-gradient-to-r ${step.color} transition-all duration-500 rounded-full`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
