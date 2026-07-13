import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Sai Tech Academy",
  description: "Get in touch with Sai Tech Academy in Bhubaneswar, Odisha. Submit a message for class inquiries, call us directly, or find our address in Jaydev Vihar.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
