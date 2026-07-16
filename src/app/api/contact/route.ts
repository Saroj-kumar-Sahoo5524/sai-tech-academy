import { NextRequest, NextResponse } from "next/server";
import { appendToSheet } from "@/lib/googleSheets";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, message, course } = body;

    // Validate
    if (!name || name.length < 2 || name.length > 50) {
      return NextResponse.json({ status: "error", message: "Name must be 2–50 characters." }, { status: 400 });
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email)) {
      return NextResponse.json({ status: "error", message: "Invalid email address." }, { status: 400 });
    }
    if (!phone || !/^\d{10}$/.test(phone)) {
      return NextResponse.json({ status: "error", message: "Phone must be exactly 10 digits." }, { status: 400 });
    }
    if (!message || message.length < 2 || message.length > 500) {
      return NextResponse.json({ status: "error", message: "Message must be 2–500 characters." }, { status: 400 });
    }

    await appendToSheet([name, email, phone, course || "General Enquiry", message]);

    return NextResponse.json({
      status: "success",
      message: `✅ Thank you, ${name}! Your message has been received. We'll contact you soon.`,
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ status: "error", message: "Server error. Please try again later." }, { status: 500 });
  }
}
