import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { CAL_BOOKING_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact | Down Low Shots",
  description:
    "Book a portrait or studio photography session with Down Low Shots.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ContactPage() {
  redirect(CAL_BOOKING_URL);
}
