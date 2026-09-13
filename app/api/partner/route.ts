import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, organization, email, phone, partnershipType, message } =
      body;

    // Server-side validation
    if (!fullName || typeof fullName !== "string" || !fullName.trim()) {
      return NextResponse.json(
        { error: "Full Name is required." },
        { status: 400 }
      );
    }

    if (!organization || typeof organization !== "string" || !organization.trim()) {
      return NextResponse.json(
        { error: "Organization is required." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !email.trim()) {
      return NextResponse.json(
        { error: "Work Email is required." },
        { status: 400 }
      );
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    if (
      !partnershipType ||
      typeof partnershipType !== "string" ||
      !partnershipType.trim()
    ) {
      return NextResponse.json(
        { error: "Partnership Type is required." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { error: "Message is required." },
        { status: 400 }
      );
    }

    const recipient =
      process.env.NTARA_PARTNER_EMAIL || "partnerships@ntara.example";
    const resendApiKey = process.env.RESEND_API_KEY;

    // If a real Resend API key is configured, invoke the Resend API
    if (resendApiKey) {
      try {
        const emailResponse = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "NTARA Partnerships <onboarding@resend.dev>",
            to: [recipient],
            subject: `New Partnership Enquiry — ${organization}`,
            text: [
              `Name: ${fullName}`,
              `Organization: ${organization}`,
              `Work Email: ${email}`,
              `Phone: ${phone || "Not provided"}`,
              `Partnership Type: ${partnershipType}`,
              `Message: ${message}`,
              `Submitted: ${new Date().toISOString()}`,
            ].join("\n"),
          }),
        });

        if (!emailResponse.ok) {
          const errorData = await emailResponse.text();
          console.error("Resend API error:", errorData);
          return NextResponse.json(
            { error: "Failed to dispatch email notification." },
            { status: 500 }
          );
        }
      } catch (err) {
        console.error("Resend delivery exception:", err);
        return NextResponse.json(
          { error: "Internal server error dispatching email." },
          { status: 500 }
        );
      }
    } else {
      // In development / demo environment without RESEND_API_KEY
      console.log("[NTARA Partnership Enquiry Received]", {
        recipient,
        fullName,
        organization,
        email,
        phone: phone || "Not provided",
        partnershipType,
        message,
        timestamp: new Date().toISOString(),
      });
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your partnership request has been received.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Partner submission handler error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
