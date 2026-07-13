"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Courses",
    href: "/courses",
    dropdown: [
      { label: "Java Full Stack",     href: "/courses/java",           logo: "/course-logos/java.svg",        color: "#F89820" },
      { label: "Python Development",  href: "/courses/python",         logo: "/course-logos/python.svg",      color: "#3776AB" },
      { label: "DevOps",              href: "/courses/devops",         logo: "/course-logos/devops.svg",      color: "#0078D4" },
      { label: "AWS Cloud",           href: "/courses/aws",            logo: "/course-logos/aws.svg",         color: "#FF9900" },
      { label: "Software Testing",    href: "/courses/testing",        logo: "/course-logos/testing.svg",     color: "#10B981" },
      { label: "Data Science",        href: "/courses/data-science",   logo: "/course-logos/datascience.svg", color: "#8B5CF6" },
      { label: "Web Development",     href: "/courses/web-development",logo: "/course-logos/react.svg",       color: "#06B6D4" },
      { label: "SAP",                 href: "/courses/sap",            logo: "/course-logos/sap.svg",         color: "#0070F2" },
      { label: "Linux",               href: "/courses/linux",          logo: "/course-logos/linux.svg",       color: "#E95420" },
    ],
  },
  { label: "Why Us", href: "/why-us" },
  { label: "Services", href: "/services" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHome
          ? "bg-[#0B1120]/90 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-28 py-1">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/saitech-logo.svg"
              alt="Sai Tech Solution"
              width={100}
              height={100}
              className="w-[100px] h-[100px] object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_12px_rgba(0,180,255,0.6)]"
            />
            <div>
              <div className="text-white font-bold text-base leading-tight font-outfit">Sai Tech Academy</div>
              <div className="text-slate-400 text-[10px] italic">Experience IT with us</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <button className="flex items-center gap-1 text-slate-300 hover:text-white text-sm font-medium transition-colors py-2">
                    {link.label}
                    <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdown ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <AnimatePresence>
                    {dropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.97 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 glass-card rounded-2xl border border-white/10 shadow-xl shadow-black/30 py-2 overflow-hidden"
                      >
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="flex items-center gap-3 px-4 py-2.5 text-slate-300 hover:text-white hover:bg-white/5 transition-all text-sm group/item"
                          >
                            <span
                              className="w-7 h-7 rounded-lg bg-white flex items-center justify-center flex-shrink-0 p-1"
                            >
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img src={item.logo} alt={item.label} width={18} height={18} className="object-contain w-full h-full" />
                            </span>
                            <span>{item.label}</span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-slate-300 hover:text-white text-sm font-medium transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white text-sm font-semibold hover:scale-105 hover:shadow-[0_0_20px_rgba(79,70,229,0.4)] transition-all duration-300"
            >
              Enroll Now
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>

            {/* Hamburger */}
            <button
              className="lg:hidden p-2 rounded-xl glass-card border border-white/10 text-slate-300 hover:text-white transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span className={`block w-full h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
                <span className={`block w-full h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
                <span className={`block w-full h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden border-t border-white/5"
            >
              <div className="max-h-[calc(100vh-5rem)] overflow-y-auto py-4 space-y-1">
                {navLinks.map((link) =>
                  link.dropdown ? (
                    <div key={link.label}>
                      <div className="px-4 py-2 text-slate-400 text-xs font-semibold uppercase tracking-widest">
                        Courses
                      </div>
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center gap-3 px-6 py-2.5 text-slate-300 hover:text-white hover:bg-white/5 rounded-xl mx-2 transition-all text-sm"
                        >
                          <span
                            className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                            style={{ backgroundColor: item.color + "22" }}
                          >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={item.logo} alt={item.label} width={16} height={16} className="object-contain" />
                          </span>
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-4 py-2.5 text-slate-300 hover:text-white hover:bg-white/5 rounded-xl mx-2 transition-all text-sm"
                    >
                      {link.label}
                    </Link>
                  )
                )}
                <div className="px-4 pt-2">
                  <Link
                    href="/contact"
                    onClick={() => setMobileOpen(false)}
                    className="block text-center py-3 px-6 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-semibold text-sm"
                  >
                    Enroll Now
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
