"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const contactInfo = [
  {
    icon: "📍",
    title: "Our Office Address",
    // lines: ["Jaydev Vihar, BBSR", "Odisha, INDIA"],
    lines: ["opening soon", "Bhubaneswar, Odisha, INDIA"],
    color: "from-indigo-500 to-blue-600",
    href: "https://maps.google.com/?q=Jaydev+Vihar+Bhubaneswar",
  },
  {
    icon: "✉️",
    title: "General Enquiries",
    lines: ["info@saitechacademy.com"],
    color: "from-cyan-500 to-teal-600",
    href: "mailto:[EMAIL_ADDRESS]",
  },
  {
    icon: "📞",
    title: "Call Us",
    lines: ["+91-9148531106"],
    color: "from-emerald-500 to-green-600",
    href: "tel:+919148531106",
  },
  {
    icon: "🕐",
    title: "Our Timings",
    lines: ["Mon - Sat", "10:00 AM – 07:00 PM"],
    color: "from-purple-500 to-indigo-600",
    href: null,
  },
];

interface FormState {
  name: string;
  email: string;
  phone: string;
  course: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", phone: "", course: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMsg, setStatusMsg] = useState("");

  function validate(): boolean {
    const errs: FormErrors = {};
    if (form.name.trim().length < 2 || form.name.trim().length > 50) errs.name = "Name must be 2–50 characters.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) errs.email = "Enter a valid email address.";
    if (!/^\d{10}$/.test(form.phone.trim())) errs.phone = "Phone must be exactly 10 digits.";
    if (form.message.trim().length < 2 || form.message.trim().length > 500) errs.message = "Message must be 2–500 characters.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.status === "success") {
        setStatus("success");
        setStatusMsg(data.message);
        setForm({ name: "", email: "", phone: "", course: "", message: "" });
      } else {
        setStatus("error");
        setStatusMsg(data.message || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setStatusMsg("Server error. Please try again later.");
    }
  }

  return (
    <section id="contact" className="py-28 bg-[#0B1120] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-4">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-outfit mb-5">
            Contact <span className="gradient-text">Us</span>
          </h2>
          <p
            className="text-slate-400 text-lg max-w-2xl mx-auto"
            style={{ textAlign: 'center', maxWidth: '42rem', marginLeft: 'auto', marginRight: 'auto' }}
          >
            Have questions? We&apos;d love to hear from you. Fill out the form or reach us directly.
          </p>
        </motion.div>

        {/* Contact info cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {contactInfo.map((info, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {info.href ? (
                <a
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group glass-card rounded-3xl p-5 sm:p-6 text-center border border-white/5 hover:border-indigo-400/30 transition-all duration-300 hover:-translate-y-2 block"
                >
                  <div className={`inline-flex w-12 h-12 rounded-2xl bg-gradient-to-br ${info.color} items-center justify-center text-xl mb-3 shadow-lg group-hover:scale-110 transition-transform`}>
                    {info.icon}
                  </div>
                  <h4 className="text-white font-semibold text-sm mb-1">{info.title}</h4>
                  {info.lines.map((l, j) => <p key={j} className="text-slate-400 text-xs">{l}</p>)}
                </a>
              ) : (
                <div className="glass-card rounded-3xl p-5 sm:p-6 text-center border border-white/5 hover:border-indigo-400/30 transition-all duration-300 hover:-translate-y-2">
                  <div className={`inline-flex w-12 h-12 rounded-2xl bg-gradient-to-br ${info.color} items-center justify-center text-xl mb-3 shadow-lg`}>
                    {info.icon}
                  </div>
                  <h4 className="text-white font-semibold text-sm mb-1">{info.title}</h4>
                  {info.lines.map((l, j) => <p key={j} className="text-slate-400 text-xs">{l}</p>)}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto"
          style={{ maxWidth: '48rem' }}
        >
          <div className="glass-card rounded-3xl p-5 sm:p-10 border border-white/5">
            <h3 className="text-2xl font-bold text-white font-outfit mb-6">Send Us a Message</h3>

            {status === "success" && (
              <div className="mb-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-sm">
                {statusMsg}
              </div>
            )}
            {status === "error" && (
              <div className="mb-6 p-4 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-300 text-sm">
                {statusMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-1.5">Full Name *</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-400/50 focus:bg-white/[0.08] transition-all text-sm"
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                </div>
                {/* Email */}
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-1.5">Email *</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-400/50 focus:bg-white/[0.08] transition-all text-sm"
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone */}
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-1.5">Phone *</label>
                  <input
                    type="tel"
                    placeholder="10-digit phone number"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-400/50 focus:bg-white/[0.08] transition-all text-sm"
                  />
                  {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                </div>
                {/* Course */}
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-1.5">Interested Course</label>
                  <select
                    value={form.course}
                    onChange={(e) => setForm({ ...form, course: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-indigo-400/50 transition-all text-sm appearance-none"
                  >
                    <option value="" className="bg-slate-800">Select a course</option>
                    <option value="Java Full Stack" className="bg-slate-800">Java Full Stack</option>
                    <option value="Python Development" className="bg-slate-800">Python Development</option>
                    <option value="DevOps" className="bg-slate-800">DevOps</option>
                    <option value="AWS" className="bg-slate-800">AWS Cloud</option>
                    <option value="Software Testing" className="bg-slate-800">Software Testing</option>
                    <option value="Data Science" className="bg-slate-800">Data Science</option>
                    <option value="Web Development" className="bg-slate-800">Web Development</option>
                    <option value="SAP" className="bg-slate-800">SAP</option>
                    <option value="General Enquiry" className="bg-slate-800">General Enquiry</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-slate-300 text-sm font-medium mb-1.5">Message *</label>
                <textarea
                  rows={4}
                  placeholder="Tell us how we can help you..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-400/50 focus:bg-white/[0.08] transition-all text-sm resize-none"
                />
                {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-bold text-base hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(79,70,229,0.4)] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
              >
                {status === "loading" ? (
                  <>
                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
