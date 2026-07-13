import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials — Sai Tech Academy",
  description: "Read real reviews and success stories from students who completed their IT training at Sai Tech Academy and landed roles at top companies like TCS, Infosys, Wipro, and Cognizant.",
};

export default function TestimonialsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
