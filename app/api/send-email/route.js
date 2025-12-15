// app/api/send-email/route.js

// app/api/send-email/route.js

import { Resend } from "resend";

export async function POST(req) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      throw new Error("RESEND_API_KEY is missing");
    }

    const resend = new Resend(apiKey);

    const { name, email, message } = await req.json();

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["kajalwebbrains@gmail.com"],
      subject: `New contact message from ${name}`,
      html: `
        <h3>New Portfolio Contact</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return Response.json({ success: false }, { status: 500 });
  }
}
