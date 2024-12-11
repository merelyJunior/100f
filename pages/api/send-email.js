import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const transporter = nodemailer.createTransport({
      host: 'mail.adm.tools',
      port: 465,
      secure: true, 
      auth: {
        user: 'info@100f.com',
        pass: 'pJT9X67ag9',
      },
    });
    const { name, email, company, whatsApp, capacity } = req.body;
    console.log(req.body);
    
    let mailOptions;
    if (name && email && capacity && whatsApp) {
      mailOptions = {
        from: '100Fcom_Pitch <info@100f.com>',
        to: 'kir.ulanov@100f.com, admin@100f.com, info@100f.com',
        subject: `100F.com Request Investment Deck`,
        text: `
          Name: ${name}
          Email: ${email}
          company: ${company}
          WhatsApp: ${whatsApp}
          Capacity: ${capacity}
        `,
      };
    } else {
      mailOptions = {
        from: '100Fcom_EarlyAdopter <info@100f.com>',
        to: 'kir.ulanov@100f.com, admin@100f.com, info@100f.com',
        subject: `100F.com Request for Early Adoption`,
        text: `
          Name: ${name}
          Email: ${email}
        `,
      };
    }
    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
}