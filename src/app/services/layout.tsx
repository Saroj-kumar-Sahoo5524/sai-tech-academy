import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services — Sai Tech Academy",
  description: "Explore the range of IT education and career placement services offered by Sai Tech Academy: classroom training, online live classes, corporate training, and mock interview preparations.",
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
