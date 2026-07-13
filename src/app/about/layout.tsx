import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Sai Tech Academy",
  description: "Learn more about Sai Tech Academy, Bhubaneswar's premier IT training institute. 10+ years of training excellence, 2000+ students trained, and 95% placement rate.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
