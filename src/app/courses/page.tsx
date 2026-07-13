import { courses } from "@/lib/data/courses";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Courses — Sai Tech Academy",
  description:
    "Explore all IT training courses at Sai Tech Academy: Java, Python, DevOps, AWS, Data Science, Web Development, Software Testing, SAP and more.",
};

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-[#0B1120] pb-24" style={{ paddingTop: '7rem' }}>
      {/* Header */}
      <section className="relative py-8 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-indigo-500/8 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-cyan-500/6 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-4">
            All Programs
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-outfit mb-4">
            Our <span className="gradient-text">Courses</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto text-center">
            Industry-aligned programs designed by experts to make you job-ready from day one.
          </p>
        </div>
      </section>

      {/* Courses grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="group glass-card rounded-3xl border border-white/5 hover:border-indigo-400/30 overflow-hidden transition-all duration-300 hover:-translate-y-2 flex flex-col"
            >
              {/* Header */}
              <div className={`relative p-6 bg-gradient-to-br ${course.gradient} opacity-90`}>
                <div className="mb-3 w-14 h-14 rounded-2xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg p-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={course.logo}
                    alt={course.shortTitle}
                    width={36}
                    height={36}
                    className="object-contain w-full h-full p-1"
                  />
                </div>
                {course.badge && (
                  <span className="absolute top-4 right-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-semibold border border-white/20">
                    {course.badge}
                  </span>
                )}
                <h2 className="text-lg font-bold text-white font-outfit leading-tight">
                  {course.shortTitle}
                </h2>
                <p className="text-white/80 text-xs mt-1">{course.duration} • {course.mode}</p>
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-1">
                <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1 line-clamp-2">
                  {course.description}
                </p>

                {/* Stats */}
                <div className="flex items-center gap-3 mb-4 text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <span className="text-yellow-400">★</span>
                    <span className="text-white font-medium">{course.rating}</span>
                  </span>
                  <span>•</span>
                  <span>{course.students.toLocaleString()}+ students</span>
                </div>

                {/* Tools */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {course.tools.slice(0, 3).map((tool) => (
                    <span key={tool} className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs">
                      {tool}
                    </span>
                  ))}
                  {course.tools.length > 3 && (
                    <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-400 text-xs">
                      +{course.tools.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <Link
                    href={`/courses/${course.slug}`}
                    className="w-full py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 text-white text-sm font-medium text-center hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(79,70,229,0.3)] transition-all duration-200 block"
                  >
                    View Details &amp; Enroll
                  </Link>
                  <a
                    href={course.syllabus}
                    download={`${course.shortTitle.replace(/\s+/g, "-")}-Syllabus.pdf`}
                    className="w-full py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-400/40 text-slate-300 hover:text-white text-sm font-medium text-center transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download Syllabus
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
