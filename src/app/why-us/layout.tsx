import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Choose Us — Sai Tech Academy",
  description: "Discover what makes Sai Tech Academy the top IT training institute in Bhubaneswar. 100% practical sessions, small batch sizes, expert mentors, and 100% job placement assistance.",
};

export default function WhyUsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
