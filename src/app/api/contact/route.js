import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const { name, email, phone, query } = await req.json();

        // Nodemailer transporter setup
        const transporter = nodemailer.createTransport({
            service: "hotmail", // Ya aap SMTP server use kar sakte hain
            auth: {
                user: "export@ineinternational.in", // Gmail/SMTP email
                pass: "nffjnqxjcrdydnsn", // App Password
            },
        }); 

        // Email content
        const mailOptions = {
            from: "nikhil.ineinfotech@gmail.com",
            to: "your-email@example.com", // Apna email yahan dalein
            subject: "New Contact Form Submission",
            html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Query:</strong> ${query}</p>
      `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return Response.json({ success: true, message: "Email sent successfully!" });
    } catch (error) {
        return Response.json({ success: false, message: "Failed to send email!", error }, { status: 500 });
    }
}
