"use client";
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box, Torus, Float, Stars, Html } from "@react-three/drei";
import * as THREE from "three";
import { FaPython, FaJava, FaLinux, FaReact } from "react-icons/fa";
import { SiMysql } from "react-icons/si";

const TECH_ICONS = [
  { icon: FaPython, color: "#3776AB" },
  { icon: FaJava,   color: "#F89820" },
  { icon: FaLinux,  color: "#FCC624" },
  { icon: SiMysql,  color: "#4479A1" },
  { icon: FaReact,  color: "#61DAFB" },
];
import Link from "next/link";

function FloatingGeometry() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      groupRef.current.rotation.x = 0.25 + Math.sin(state.clock.elapsedTime * 0.25) * 0.05; // Tilts the laptop forward to reveal keyboard base and 3D depth
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central laptop-like box */}
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
        <Box args={[2.5, 1.6, 0.1]} position={[0, 0.2, 0]}>
          <meshStandardMaterial color="#1e293b" metalness={0.8} roughness={0.2} />
        </Box>
        {/* Screen glow */}
        <Box args={[2.3, 1.4, 0.05]} position={[0, 0.2, 0.08]}>
          <meshStandardMaterial color="#4F46E5" emissive="#4F46E5" emissiveIntensity={0.6} metalness={0.5} roughness={0.3} />
        </Box>
        {/* Base */}
        <Box args={[2.5, 0.1, 1.5]} position={[0, -0.65, 0.75]}>
          <meshStandardMaterial color="#0f172a" metalness={0.9} roughness={0.1} />
        </Box>
      </Float>

      {/* Orbiting tech icons — same position/Float math as before */}
      {TECH_ICONS.map((tech, i) => {
        const angle = (i / 5) * Math.PI * 2;
        const radius = 2.2;
        const IconComp = tech.icon;
        return (
          <Float key={i} speed={2 + i * 0.3} rotationIntensity={0.5} floatIntensity={1}>
            <group
              position={[Math.cos(angle) * radius, Math.sin(angle * 0.7) * 0.8, Math.sin(angle) * radius]}
            >
              <Html center sprite>
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 8,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(11,17,32,0.80)",
                    border: `1px solid ${tech.color}55`,
                    boxShadow: `0 0 10px ${tech.color}44, inset 0 0 6px ${tech.color}15`,
                    backdropFilter: "blur(6px)",
                  }}
                >
                  <IconComp size={16} color={tech.color} />
                </div>
              </Html>
            </group>
          </Float>
        );
      })}

      {/* Torus ring */}
      <Float speed={0.8} floatIntensity={0.3}>
        <Torus args={[1.8, 0.02, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial color="#4F46E5" emissive="#4F46E5" emissiveIntensity={0.4} transparent opacity={0.5} />
        </Torus>
      </Float>
    </group>
  );
}

const trustBadges = [
  { icon: "⭐", value: "4.9/5", label: "Student Rating" },
  { icon: "👥", value: "20+", label: "Students Trained" },
  { icon: "💼", value: "95%", label: "Job Ready pogram" },
  { icon: "🏆", value: "4+", label: "Years Experience" },
];

const words = ["Confidence.", "Excellence.", "Success.", "The Future."];

export default function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const wordRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (wordRef.current) {
        wordRef.current.style.opacity = "0";
        setTimeout(() => {
          if (wordRef.current) {
            wordRef.current.textContent = words[i % words.length];
            wordRef.current.style.opacity = "1";
          }
          i++;
        }, 300);
      }
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0B1120]"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(79,70,229,0.08)_0%,transparent_70%)]" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-28 pb-20 hero-section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="text-center lg:text-left lg:mt-2">

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white mb-4 font-outfit"
            >
              Launch Your
              <br />
              <span className="gradient-text">IT Career</span>
              <br />
              With{" "}
              <span
                ref={wordRef}
                className="text-cyan-400 transition-opacity duration-300"
                style={{ opacity: 1 }}
              >
                Confidence.
              </span>
            </motion.h1>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-6 mx-auto lg:mx-0"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-400" />
              </span>
              #1 IT Training Institute 
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-400 text-lg lg:text-xl max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Sai Tech Academy provides industry-ready IT training with expert mentors, live projects,
              small batches, and 100% Job Ready Program. Transform your future today.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 items-center lg:items-start justify-center lg:justify-start mt-8 mb-12"
            >
              <Link
                href="/courses"
                className="group relative inline-flex items-center justify-center gap-2 px-10 py-5 rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-semibold text-base overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(79,70,229,0.5)]"
              >
                <span className="relative z-10">Explore Courses</span>
                <svg className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>

              {/* <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl glass-card text-white font-semibold text-base border border-white/10 hover:border-indigo-400/40 transition-all duration-300 hover:scale-105"
              >
                <span>Free Demo Class</span>
                <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </Link> */}
            </motion.div>
            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3"
            >
              {trustBadges.map((badge, i) => (
                <div
                  key={i}
                  className="glass-card rounded-2xl p-3 text-center border border-white/5 hover:border-indigo-400/30 transition-all duration-300 trust-badge-card"
                >
                  <div className="text-xl mb-1">{badge.icon}</div>
                  <div className="text-white font-bold text-lg leading-tight trust-badge-value">{badge.value}</div>
                  <div className="text-slate-400 text-xs">{badge.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: 3D Canvas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block h-[520px] relative hero-3d-canvas"
          >
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
              <ambientLight intensity={0.4} />
              <pointLight position={[5, 5, 5]} intensity={1.2} color="#4F46E5" />
              <pointLight position={[-5, -5, -5]} intensity={0.8} color="#06B6D4" />
              <spotLight position={[0, 8, 0]} intensity={1.5} color="#ffffff" angle={0.3} penumbra={1} />
              <Stars radius={80} depth={50} count={3000} factor={3} saturation={0} fade speed={0.5} />
              <FloatingGeometry />
            </Canvas>

            {/* Glow overlay */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl" />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 hero-scroll-indicator"
        >
          <span className="text-slate-500 text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border border-slate-600 flex items-start justify-center p-1"
          >
            <div className="w-1 h-2 bg-indigo-400 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
