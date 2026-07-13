"use client";
import { motion } from "framer-motion";

const services = [
  {
    icon: "📋",
    title: "Comprehensive Training Programs",
    description:
      "From beginner to advanced levels, our courses cover a broad spectrum of software technologies, including programming languages, software development methodologies, and data science.",
    color: "from-indigo-500 to-blue-600",
  },
  {
    icon: "🔨",
    title: "Hands-On Learning",
    description:
      "We believe in learning by doing. Our training programs include practical projects, real-world scenarios, and interactive exercises to ensure that you gain practical skills and experience.",
    color: "from-cyan-500 to-teal-600",
  },
  {
    icon: "🎓",
    title: "Expert Instructors",
    description:
      "Our trainers are not just teachers; they are industry veterans who bring real-world insights and practical knowledge to the classroom. They are committed to helping you succeed.",
    color: "from-emerald-500 to-green-600",
  },
  {
    icon: "🌐",
    title: "Flexible Learning Options",
    description:
      "We offer both in-person and online training options to accommodate diverse learning preferences and schedules. Whether you prefer a classroom or remote learning, we've got you covered.",
    color: "from-purple-500 to-indigo-600",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-[#0B1120] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-4">
            What We Offer
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-outfit mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto text-center">
            Comprehensive IT education solutions tailored for every learner&apos;s journey.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group glass-card rounded-3xl p-6 sm:p-8 border border-white/5 hover:border-indigo-400/30 transition-all duration-300 flex flex-col sm:flex-row items-start gap-4 sm:gap-6"
            >
              <div className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white font-outfit mb-2 group-hover:text-indigo-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 leading-relaxed text-sm">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
