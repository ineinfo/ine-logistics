import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const { name, email, phone, query } = await req.json();

        // Nodemailer transporter setup
        const transporter = nodemailer.createTransport({
            service: "gmail", // Ya aap SMTP server use kar sakte hain
            auth: {
                user: "export.ineinternational@gmail.com", // Gmail/SMTP email
                pass: "fjpx hlyg iium wgec", // App Password
            },
        });

        // Email content
        const mailOptions = {
            from: "export.ineinternational@gmail.com",
            to: [email, "export.ineinternational@gmail.com"],
            cc: ["ajay@ineinternational.in","export@ineinternational.in"],
            // bcc: ["bccrecipient@example.com", "anotherbcc@example.com"],
            subject: "New Contact Form Submission",
            html: `
            <html>
<head>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f0f8ff;
      color: #333;
      padding: 20px;
    }
    .container {
      background: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      max-width: 600px;
      margin: auto;
      border-left: 5px solid #007bff;
    }
    h2 {
      color: #007bff;
      text-align: center;
    }
    .info {
      margin: 10px 0;
      padding: 10px;
      border-radius: 5px;
      background: #f8f9fa;
    }
    .info strong {
      color: #0056b3;
    }
    .footer {
      text-align: center;
      margin-top: 20px;
      font-size: 14px;
      color: #555;
    }
  </style>
</head>
<body>
  <div class="container">
    <h2>📩 New Contact Form Submission</h2>
    <div class="info"><strong>Name:</strong> ${name}</div>
    <div class="info"><strong>Email:</strong> ${email}</div>
    <div class="info"><strong>Phone:</strong> ${phone}</div>
    <div class="info"><strong>Query:</strong> ${query}</div>
    <p class="footer">Thank you for reaching out! We will get back to you soon. 😊</p>
  </div>
</body>
</html>
      `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return Response.json({ success: true, message: "Email sent successfully!" });
    } catch (error) {
      console.error("Email sending error:", error);
        return Response.json({ success: false, message: "Failed to send email!", error }, { status: 500 });
    }
}
