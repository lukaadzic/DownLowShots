import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Parse the date string back to a Date if present
    const parsed = contactSchema.parse({
      ...body,
      preferredDate: body.preferredDate
        ? new Date(body.preferredDate)
        : undefined,
    });

    // TODO: Integrate with email service (Resend, SendGrid, etc.)
    console.log("Contact form submission:", parsed);

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json(
        { error: "Validation failed", details: error },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
