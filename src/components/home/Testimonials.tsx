"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

const testimonials = [
  {
    name: "Varun Mitra",
    role: "Java Developer",
    company: "Infosys",
    text: "They have well skilled and efficient trainers for all the available courses. The practical sessions were excellent and helped me crack my first interview.",
    rating: 5,
    avatar: "VM",
    color: "from-indigo-500 to-purple-600",
  },
  {
    name: "Neha Gupta",
    role: "Python Developer",
    company: "TCS",
    text: "They helped me choose the right course and taught me well. All the major courses are available with them. The small batch size meant I got personal attention throughout.",
    rating: 5,
    avatar: "NG",
    color: "from-cyan-500 to-blue-600",
  },
  {
    name: "Pankaj Sharma",
    role: "QA Engineer",
    company: "Wipro",
    text: "They have all the important computer courses for everyone. Will surely recommend them. The placement support they provided was exceptional.",
    rating: 5,
    avatar: "PS",
    color: "from-emerald-500 to-teal-600",
  },
  {
    name: "Priya Rani",
    role: "DevOps Engineer",
    company: "HCL",
    text: "The DevOps course was exactly what I needed to switch careers. The hands-on labs with real tools made all the difference. Got placed within a month of completion!",
    rating: 5,
    avatar: "PR",
    color: "from-purple-500 to-pink-600",
  },
  {
    name: "Rohit Kumar",
    role: "Data Analyst",
    company: "Cognizant",
    text: "Excellent faculty and up-to-date curriculum. The trainers have real industry experience and share practical insights. My data science project portfolio helped me land the job.",
    rating: 5,
    avatar: "RK",
    color: "from-orange-500 to-red-600",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = next, -1 = prev

  const goNext = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setInterval(goNext, 5000);
    return () => clearInterval(timer);
  }, [goNext]);

  const variants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.45,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
      transition: {
        duration: 0.35,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      },
    }),
  };

  const t = testimonials[current];

  return (
    <section id="testimonial" className="py-24 bg-[#0F172A] relative overflow-hidden">
      {/* Background glows */}
      {/* <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div> */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-300 text-sm font-medium mb-4">
            Student Stories
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-outfit mb-4">
            What Our <span className="gradient-text">Students Say</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Real success stories from students who transformed their careers with us.
          </p>
        </motion.div> */}

        {/* Slider */}
        <div className="relative max-w-2xl mx-auto">
          {/* Prev Button */}
          <button
            onClick={goPrev}
            aria-label="Previous"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-20 w-11 h-11 rounded-full bg-white/5 border border-white/10 hover:bg-indigo-500/20 hover:border-indigo-400/40 flex items-center justify-center transition-all duration-300 group"
          >
            <svg className="w-5 h-5 text-slate-400 group-hover:text-indigo-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next Button */}
          <button
            onClick={goNext}
            aria-label="Next"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-20 w-11 h-11 rounded-full bg-white/5 border border-white/10 hover:bg-indigo-500/20 hover:border-indigo-400/40 flex items-center justify-center transition-all duration-300 group"
          >
            <svg className="w-5 h-5 text-slate-400 group-hover:text-indigo-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Card */}
          <div className="overflow-hidden rounded-3xl">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="glass-card rounded-3xl p-8 sm:p-12 border border-white/5 relative"
              >
                {/* Decorative quote */}
                <div className="absolute top-4 right-8 text-8xl text-indigo-500/10 font-serif leading-none select-none pointer-events-none">&ldquo;</div>

                {/* Stars */}
                <div className="flex gap-1 mb-6 justify-center">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <span key={j} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-slate-200 leading-relaxed text-lg text-center italic mb-10 font-light">
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Divider */}
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent mx-auto mb-8" />

                {/* Author */}
                <div className="flex items-center justify-center gap-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-base shadow-lg flex-shrink-0`}>
                    {t.avatar}
                  </div>
                  <div className="text-left">
                    <div className="text-white font-semibold text-base">{t.name}</div>
                    <div className="text-slate-400 text-sm">{t.role} · {t.company}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className="transition-all duration-300 rounded-full h-2"
                style={{
                  width: i === current ? 28 : 8,
                  background: i === current ? "#6366f1" : "rgba(255,255,255,0.2)",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
