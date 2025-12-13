// app/api/send-email-route.js

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["kajalwebbrains@gmail.com"],
      subject: `new contact messsage from ${name}`,
      html: `
      
        <h3>New Portfolio Contact</h3>
        <p><strong>Name:</strong> ${name} </p>
         <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ success: false }, { status: 500 });
  }
}
