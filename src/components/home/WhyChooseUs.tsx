"use client";
import { motion } from "framer-motion";

const features = [
  {
    icon: "🔄",
    title: "Continuous Course Upgradation",
    description:
      "We constantly update our courses to keep pace with the latest technologies and industry trends. Each module is designed after consulting working professionals and tech experts, ensuring you gain skills that are relevant, in-demand, and practical.",
    color: "from-indigo-500 to-purple-600",
    glow: "indigo",
  },
  {
    icon: "💼",
    title: "100% Job Ready Program",
    description:
      "From resume building to interview preparation, our dedicated placement support team works closely with you to help you land your dream job. We collaborate with top companies and recruiters to ensure multiple opportunities.",
    color: "from-emerald-500 to-teal-600",
    glow: "emerald",
  },
  {
    icon: "🛠️",
    title: "100% Practical Training",
    description:
      "We believe in learning by doing. Our training sessions focus on hands-on implementation through live projects, case studies, and real-world scenarios. You won't just understand concepts — you'll confidently apply them.",
    color: "from-cyan-500 to-blue-600",
    glow: "cyan",
  },
  {
    icon: "👥",
    title: "Small Batches for Personal Attention",
    description:
      "Our small batch sizes ensure that every student receives personal guidance and mentorship. Trainers can focus on each learner's progress, clarify doubts instantly, and adapt sessions based on individual learning speeds.",
    color: "from-purple-500 to-pink-600",
    glow: "purple",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] } },
};


export default function WhyChooseUs() {
  return (
    <section id="about" className="py-24 bg-[#0F172A] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-500/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-outfit mb-4">
            What Makes Sai Tech Academy{" "}
            <span className="gradient-text">Different?</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto text-center">
            We don&apos;t just teach — we transform careers. Here&apos;s what sets us apart from the rest.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.01 }}
              className="group glass-card rounded-3xl p-8 border border-white/5 hover:border-indigo-400/30 transition-all duration-300 cursor-default"
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} mb-5 text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white font-outfit mb-3 group-hover:text-indigo-300 transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm">{feature.description}</p>

              {/* Gradient line bottom */}
              <div className={`mt-6 h-0.5 w-0 group-hover:w-full bg-gradient-to-r ${feature.color} transition-all duration-500 rounded-full`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
