import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // TODO: Replace console.log with actual email service (Resend, SendGrid, etc.)
    // For now, we'll just log the application data
    console.log("Scholarship Application Received:", {
      timestamp: new Date().toISOString(),
      studentName: data.studentName,
      guardianEmail: data.guardianEmail,
      data: data,
    });

    // In production, you would send an email here:
    // Example with Resend:
    /*
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: 'Talawa <applications@talawa.ca>',
      to: ['info@talawa.ca'],
      subject: `New Scholarship Application - ${data.studentName}`,
      html: `
        <h2>New Scholarship Application</h2>
        <p><strong>Student:</strong> ${data.studentName}</p>
        <p><strong>Age:</strong> ${data.studentAge}</p>
        <p><strong>Grade:</strong> ${data.studentGrade}</p>
        <p><strong>School:</strong> ${data.studentSchool}</p>
        <p><strong>Guardian:</strong> ${data.guardianName} (${data.guardianRelation})</p>
        <p><strong>Email:</strong> ${data.guardianEmail}</p>
        <p><strong>Phone:</strong> ${data.guardianPhone}</p>
        <p><strong>Address:</strong> ${data.address}, ${data.parish}</p>
        <p><strong>Educational Needs:</strong></p>
        <p>${data.educationalNeeds}</p>
        <p><strong>Future Goals:</strong></p>
        <p>${data.futureGoals}</p>
        ${data.additionalInfo ? `<p><strong>Additional Info:</strong> ${data.additionalInfo}</p>` : ''}
      `,
    });

    // Send confirmation email to applicant
    await resend.emails.send({
      from: 'Talawa <noreply@talawa.ca>',
      to: [data.guardianEmail],
      subject: 'Scholarship Application Received - Talawa',
      html: `
        <h2>Thank you for your application!</h2>
        <p>Dear ${data.guardianName},</p>
        <p>We have received ${data.studentName}'s scholarship application. We will review it carefully and be in touch within 2-3 weeks.</p>
        <p>If you have any questions, please don't hesitate to contact us.</p>
        <p>Best regards,<br>The Talawa Team</p>
      `,
    });
    */

    return NextResponse.json(
      { message: "Application received successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing application:", error);
    return NextResponse.json(
      { error: "Failed to process application" },
      { status: 500 }
    );
  }
}
