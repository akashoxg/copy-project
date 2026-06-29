const nodemailer = require('nodemailer');

const sendLeadNotification = async (lead) => {
  try {
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.log('SMTP credentials not configured. Skipping email notification.');
      return;
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT || 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"BimaKey Leads" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL || process.env.SMTP_USER,
      subject: `New Lead: ${lead.name} - ${lead.insuranceType}`,
      html: `
        <h2>New Consultation Request</h2>
        <p><strong>Name:</strong> ${lead.name}</p>
        <p><strong>Phone:</strong> ${lead.phone}</p>
        <p><strong>Email:</strong> ${lead.email}</p>
        <p><strong>Insurance Type:</strong> ${lead.insuranceType}</p>
        <p><strong>Source:</strong> ${lead.source}</p>
        <p><strong>WhatsApp Consent:</strong> ${lead.whatsappConsent ? 'Yes' : 'No'}</p>
        <p><strong>Message:</strong></p>
        <blockquote>${lead.message || 'No message provided'}</blockquote>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

module.exports = {
  sendLeadNotification,
};
