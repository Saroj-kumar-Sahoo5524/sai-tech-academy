"use client";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
import { courses } from "@/lib/data/courses";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function PopularCourses() {
  return (
    <section id="courses" className="py-24 bg-[#0B1120] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm font-medium mb-4">
            Our Programs
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-outfit mb-4">
            Popular <span className="gradient-text">Courses</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto text-center">
            Industry-aligned programs designed to make you job-ready from day one.
          </p>
        </motion.div>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          navigation
          pagination={{ clickable: true }}
          className="!pb-14 course-swiper"
        >
          {courses.map((course, i) => (
            <SwiperSlide key={course.id} className="h-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.1 }}
                className="group glass-card rounded-3xl border border-white/5 hover:border-indigo-400/30 overflow-hidden transition-all duration-300 hover:-translate-y-2 h-full flex flex-col"
              >
                {/* Course header */}
                <div className={`relative p-6 bg-gradient-to-br ${course.gradient} opacity-90`}>
                  <div className="text-4xl mb-2">{course.icon}</div>
                  {course.badge && (
                    <span className="absolute top-4 right-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-semibold border border-white/20">
                      {course.badge}
                    </span>
                  )}
                  <h3 className="text-lg font-bold text-white font-outfit leading-tight">
                    {course.shortTitle}
                  </h3>
                  <p className="text-white/80 text-xs mt-1">{course.duration} • {course.mode}</p>
                </div>

                {/* Course body */}
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-slate-400 text-sm leading-relaxed mb-5 line-clamp-2 flex-1">
                    {course.description}
                  </p>

                  {/* Stats row */}
                  <div className="flex items-center gap-4 mb-5 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <span className="text-yellow-400">★</span>
                      <span className="text-white font-medium">{course.rating}</span>
                    </span>
                    <span>•</span>
                    <span>{course.students.toLocaleString()}+ students</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <span className="text-indigo-400">👤</span>
                      {course.instructor.split(" ")[0]}
                    </span>
                  </div>

                  {/* Tools preview */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {course.tools.slice(0, 4).map((tool) => (
                      <span key={tool} className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs">
                        {tool}
                      </span>
                    ))}
                    {course.tools.length > 4 && (
                      <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-400 text-xs">
                        +{course.tools.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-indigo-300 font-semibold text-sm">{course.price}</span>
                      <span className="text-slate-500 line-through text-xs ml-2">{course.originalPrice}</span>
                    </div>
                    <Link
                      href={`/courses/${course.slug}`}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 text-white text-sm font-medium hover:scale-105 transition-all duration-200 hover:shadow-[0_0_20px_rgba(79,70,229,0.4)]"
                    >
                      Enroll Now
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* View all */}
        <div className="text-center mt-4">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-2xl border border-indigo-400/30 text-indigo-300 hover:bg-indigo-500/10 transition-all duration-300 font-medium"
          >
            View All Courses
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
