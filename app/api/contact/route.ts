import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // TODO: Replace console.log with actual email service (Resend, SendGrid, etc.)
    // For now, we'll just log the contact form data
    console.log("Contact Form Submission:", {
      timestamp: new Date().toISOString(),
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message,
    });

    // In production, you would send an email here:
    // Example with Resend:
    /*
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: 'Talawa Contact Form <contact@talawa.ca>',
      to: ['info@talawa.ca'],
      replyTo: data.email,
      subject: `Contact Form: ${data.subject}`,
      html: `
        <h2>New Contact Form Message</h2>
        <p><strong>From:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
      `,
    });

    // Send confirmation email to sender
    await resend.emails.send({
      from: 'Talawa <noreply@talawa.ca>',
      to: [data.email],
      subject: 'Message Received - Talawa',
      html: `
        <h2>Thank you for contacting us!</h2>
        <p>Dear ${data.name},</p>
        <p>We have received your message and will get back to you within 24-48 hours.</p>
        <p><strong>Your message:</strong></p>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
        <p>Best regards,<br>The Talawa Team</p>
      `,
    });
    */

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
