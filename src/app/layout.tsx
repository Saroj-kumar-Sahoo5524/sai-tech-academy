import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LenisProvider from "@/components/providers/LenisProvider";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export const metadata: Metadata = {
  metadataBase: new URL("https://saitechacademy.com"),
  title: "Sai Tech Academy — Premier IT Training Institute in Odisha",
  description:
    "Sai Tech Academy offers industry-leading IT training in Java, Python, DevOps, AWS, Data Science, and more. 2000+ students trained, 95% placement rate, expert instructors. Located in Bhubaneswar, Odisha.",
  keywords: [
    "IT training Odisha",
    "Java course Bhubaneswar",
    "Python training",
    "DevOps course",
    "AWS certification training",
    "Data Science course",
    "software testing course",
    "IT institute Bhubaneswar",
    "Sai Tech Academy",
  ],
  authors: [{ name: "Sai Tech Academy" }],
  openGraph: {
    title: "Sai Tech Academy — Premier IT Training Institute",
    description: "Transform your IT career with expert-led training. Decades of Excellence in IT Training.Students placed in top MNC companies.",
    type: "website",
    url: "https://saitechacademy.com",
    locale: "en_IN",
    siteName: "Sai Tech Academy",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/saitech-logo.png", sizes: "64x64", type: "image/png" },
      { url: "/saitech-logo.png", sizes: "128x128", type: "image/png" },
    ],
    shortcut: "/saitech-logo.png",
    apple: { url: "/saitech-logo.png", sizes: "180x180", type: "image/png" },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <LenisProvider>
          <Navbar />
          {children}
          <Footer />
          <WhatsAppButton />
        </LenisProvider>
      </body>
    </html>
  );
}
