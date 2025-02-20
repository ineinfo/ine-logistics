import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, phone, query } = await req.json();

    // Nodemailer transporter setup with explicit settings
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "export.ineinternational@gmail.com",
        pass: "aabi bbtt bthh vvdu",
      },
    });

    // Email content with text and HTML versions
    const mailOptions = {
      from: `"INE International" <export.ineinternational@gmail.com>`,
      to: [email, "export.ineinternational@gmail.com"],
      cc: ["ajay@ineinternational.in", "export@ineinternational.in"],
      replyTo: email,
      returnTo: "export.ineinternational@gmail.com", // Return-Path set karein
      subject: "Thank you for contacting INE International",
      text: `Hello ${name},\n\nThank you for your inquiry!\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nQuery: ${query}\n\nWe'll respond shortly.\n\nBest regards,\nINE International Team`, // Plain text version
      html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>INE International Contact Form</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f5f5f5;
            margin: 0;
            padding: 0;
          }
          .email-container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          }
          .header {
            background-color: #007bff;
            color: #ffffff;
            text-align: center;
            padding: 20px;
          }
          .header h1 {
            margin: 0;
            font-size: 24px;
          }
          .content {
            padding: 20px;
            color: #333333;
          }
          .content h2 {
            color: #007bff;
            font-size: 20px;
            margin-bottom: 10px;
          }
          .content p {
            font-size: 16px;
            line-height: 1.5;
          }
          .info-box {
            background-color: #f8f9fa;
            border-left: 4px solid #007bff;
            padding: 15px;
            margin: 15px 0;
            border-radius: 5px;
          }
          .info-box strong {
            color: #007bff;
          }
          .footer {
            text-align: center;
            padding: 15px;
            background-color: #f5f5f5;
            font-size: 14px;
            color: #666666;
          }
          .footer a {
            color: #007bff;
            text-decoration: none;
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="header">
            <h1>INE International</h1>
          </div>
          <div class="content">
            <h2>Thank You for Contacting Us!</h2>
            <p>We have received your inquiry and will get back to you shortly. Below are the details you provided:</p>
            <div class="info-box">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Query:</strong> ${query}</p>
            </div>
            <p>If you have any further questions, feel free to reply to this email.</p>
          </div>
          <div class="footer">
            <p>&copy; 2023 INE International. All rights reserved.</p>
            <p><a href="https://ineinternational.in">Visit our website</a></p>
          </div>
        </div>
      </body>
      </html>
      `,
      headers: {
        "X-Priority": "1",
        "X-MSMail-Priority": "High",
        "Importance": "High",
      },
    };

    await transporter.sendMail(mailOptions);
    return Response.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email sending error:", error);
    return Response.json({ success: false, message: "Failed to send email!", error }, { status: 500 });
  }
}