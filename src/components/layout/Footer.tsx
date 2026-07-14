import Link from "next/link";

const footerLinks = {
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Why Choose Us", href: "/why-us" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Contact Us", href: "/contact" },
  ],
  courses: [
    { label: "Java Full Stack", href: "/courses/java" },
    { label: "Python Development", href: "/courses/python" },
    { label: "DevOps", href: "/courses/devops" },
    { label: "AWS Cloud", href: "/courses/aws" },
    { label: "Data Science", href: "/courses/data-science" },
    { label: "Web Development", href: "/courses/web-development" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#060D1B] border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1 text-center sm:text-left">
            <Link href="/" className="flex items-center gap-3 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/saitech-logo.png"
                alt="Sai Tech Solution"
                width={52}
                height={52}
                className="object-contain drop-shadow-[0_0_10px_rgba(0,160,255,0.35)]"
              />
              <div>
                <div className="text-white font-bold font-outfit">Sai Tech Academy</div>
                <div className="text-slate-500 text-xs italic">Experience IT with us</div>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Transforming IT aspirations into achievements. Premier training institute
               with 4+ years of excellence.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {[
                { label: "LinkedIn", icon: "in", href: "#" },
                { label: "YouTube", icon: "▶", href: "#" },
                { label: "Instagram", icon: "📷", href: "#" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl glass-card border border-white/10 hover:border-indigo-400/30 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200 text-xs"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold font-outfit mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-indigo-300 text-sm transition-colors flex items-center gap-1.5 group"
                  >
                    <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-white font-semibold font-outfit mb-4">Our Courses</h4>
            <ul className="space-y-2">
              {footerLinks.courses.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-indigo-300 text-sm transition-colors flex items-center gap-1.5 group"
                  >
                    <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold font-outfit mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <span className="text-indigo-400 flex-shrink-0 mt-0.5">📍</span>
                <span>Opening soon, Bhubaneswar, Odisha, INDIA</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <span className="text-indigo-400 flex-shrink-0">✉️</span>
                <a href="mailto:info@saitechacademy.com" className="hover:text-indigo-300 transition-colors">
                  info@saitechacademy.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <span className="text-indigo-400 flex-shrink-0">📞</span>
                <a href="tel:+919861257949" className="hover:text-indigo-300 transition-colors">
                  +91-9148531106
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <span className="text-indigo-400 flex-shrink-0">🕐</span>
                <span>Mon - Sat: 10 AM – 7 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © 2026 Sai Tech Academy. All rights reserved. Made with ❤️ by Team Sai Tech Academy.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-500 text-xs">Online Classes Available</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
