import { getCourseBySlug, courses } from "@/lib/data/courses";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) return { title: "Course Not Found" };
  return {
    title: `${course.title} — Sai Tech Academy`,
    description: course.longDescription,
    keywords: [`${course.shortTitle} course`, "IT training Odisha", "Sai Tech Academy", ...course.tools],
  };
}

export default async function CourseDetailPage({ params }: Props) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) notFound();

  const otherCourses = courses.filter((c) => c.slug !== slug).slice(0, 3);

  return (
    <main className="min-h-screen bg-[#0B1120] pb-24" style={{ paddingTop: '9rem' }}>
      {/* Hero */}
      <section className={`relative py-20 bg-gradient-to-br ${course.gradient} overflow-hidden`}>
        <div className="absolute inset-0 bg-[#0B1120]/60" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/courses" className="hover:text-white transition-colors">Courses</Link>
            <span>/</span>
            <span className="text-white">{course.shortTitle}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-20 h-20 rounded-2xl bg-white shadow-xl flex items-center justify-center mb-5 p-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={course.logo}
                  alt={course.shortTitle}
                  width={52}
                  height={52}
                  className="object-contain w-full h-full"
                />
              </div>
              {course.badge && (
                <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold border border-white/20 mb-4">
                  {course.badge}
                </span>
              )}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-outfit mb-4 leading-tight">
                {course.title}
              </h1>
              <p className="text-white/80 text-lg leading-relaxed mb-6">{course.longDescription}</p>

              {/* Meta */}
              <div className="flex flex-wrap gap-4 mb-8 text-sm text-white/80">
                <span className="flex items-center gap-1.5">⏱️ {course.duration}</span>
                <span className="flex items-center gap-1.5">🖥️ {course.mode}</span>
                <span className="flex items-center gap-1.5">⭐ {course.rating} Rating</span>
                {/* <span className="flex items-center gap-1.5">👥 {course.students}+ Students</span> */}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white text-gray-900 font-bold hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Enroll Now
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <a
                  href={course.syllabus}
                  download={`${course.shortTitle.replace(/\s+/g, "-")}-Syllabus.pdf`}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl glass-card text-white font-semibold border border-white/20 hover:border-white/40 hover:scale-105 transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download Syllabus
                </a>
              </div>
            </div>

            {/* Quick stats card */}
            <div className="glass-card rounded-3xl p-6 border border-white/10">
              <h3 className="text-white font-bold text-lg font-outfit mb-4">Course Overview</h3>
              <div className="space-y-3">
                {[
                  { label: "Duration", value: course.duration, icon: "⏱️" },
                  { label: "Mode", value: course.mode, icon: "🖥️" },
                  { label: "Instructor", value: course.instructor, icon: "👨‍🏫" },
                  { label: "Rating", value: `${course.rating}/5 ⭐`, icon: "🌟" },
                  // { label: "Students", value: `${course.students}+ enrolled`, icon: "👥" },
                  { label: "Fee", value: course.price, icon: "💰" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                    <span className="text-white/60 text-sm flex items-center gap-2">
                      <span>{item.icon}</span> {item.label}
                    </span>
                    <span className="text-white text-sm font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content sections */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Curriculum */}
          <div className="lg:col-span-2 space-y-8">
            {/* Tools */}
            <div className="glass-card rounded-3xl p-8 border border-white/5">
              <h2 className="text-2xl font-bold text-white font-outfit mb-5">Tools & Technologies</h2>
              <div className="flex flex-wrap gap-3">
                {course.tools.map((tool) => (
                  <span key={tool} className="px-4 py-2 rounded-xl bg-indigo-500/10 border border-indigo-400/20 text-indigo-300 text-sm font-medium">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Modules */}
            <div className="glass-card rounded-3xl p-8 border border-white/5">
              <h2 className="text-2xl font-bold text-white font-outfit mb-5">Course Curriculum</h2>
              <div className="space-y-3">
                {course.modules.map((module, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white/3 border border-white/5 hover:border-indigo-400/20 transition-colors group">
                    <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${course.gradient} flex items-center justify-center text-white font-bold text-xs flex-shrink-0`}>
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <span className="text-slate-300 text-sm group-hover:text-white transition-colors">{module}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Highlights */}
            <div className="glass-card rounded-3xl p-6 border border-white/5">
              <h3 className="text-lg font-bold text-white font-outfit mb-4">Course Highlights</h3>
              <ul className="space-y-3">
                {course.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="text-emerald-400 flex-shrink-0 mt-0.5">✓</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* Enroll CTA card */}
            <div className={`rounded-3xl p-6 bg-gradient-to-br ${course.gradient} opacity-90`}>
              <div className="text-white/80 text-sm mb-2">Starting at</div>
              <div className="text-white font-bold text-2xl font-outfit mb-1">{course.price}</div>
              <div className="text-white/60 line-through text-sm mb-4">{course.originalPrice}</div>
              <Link
                href="/contact"
                className="block w-full py-3 rounded-2xl bg-white text-gray-900 font-bold text-center text-sm hover:bg-white/90 transition-all"
              >
                Enroll Now
              </Link>
              <a
                href={course.syllabus}
                download={`${course.shortTitle.replace(/\s+/g, "-")}-Syllabus.pdf`}
                className="mt-3 flex items-center justify-center gap-2 w-full py-2.5 rounded-2xl bg-white/20 hover:bg-white/30 text-white text-sm font-medium transition-all border border-white/20"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Syllabus
              </a>
            </div>

            {/* Contact quick */}
            <div className="glass-card rounded-3xl p-6 border border-white/5 space-y-3">
              <h3 className="text-lg font-bold text-white font-outfit">Have Questions?</h3>
              <a href="tel:+919861257949" className="flex items-center gap-3 text-slate-300 hover:text-white text-sm transition-colors">
                <span className="text-indigo-400">📞</span> +91-9148531106
              </a>
              <a href="mailto:info@saitechacademy.com" className="flex items-center gap-3 text-slate-300 hover:text-white text-sm transition-colors">
                <span className="text-indigo-400">✉️</span> info@saitechacademy.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Other courses */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <h2 className="text-2xl font-bold text-white font-outfit mb-6">Explore Other Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherCourses.map((c) => (
            <Link
              key={c.id}
              href={`/courses/${c.slug}`}
              className="group glass-card rounded-2xl p-5 border border-white/5 hover:border-indigo-400/30 transition-all duration-300 hover:-translate-y-1 flex items-center gap-4"
            >
              <div className={`w-12 h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0 p-2`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.logo} alt={c.shortTitle} width={28} height={28} className="object-contain w-full h-full" />
              </div>
              <div>
                <div className="text-white font-semibold text-sm group-hover:text-indigo-300 transition-colors">{c.shortTitle}</div>
                <div className="text-slate-400 text-xs">{c.duration} • ⭐ {c.rating}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
