const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "bombisemail@gmail.com",
    pass: "wpfa izdi lroy wyqc",
  },
  tls: {
    rejectUnauthorized: false,
  },
});

app.post("/api/contact", async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    const info = await transporter.sendMail({
      from: `"Bömbis István Weboldal" <bombis.istvan@gmail.com`,
      to: "bombis.istvan@gmail.com",
      replyTo: email,
      subject: `Új üzenet tőle: ${name}`,
      text: `Név: ${name}\nEmail: ${email}\nTelefonszám: ${phone || "Nincs megadva"}\n\nÜzenet:\n${message}`,
      html: `
        <h3>Új kapcsolatfelvételi űrlap kitöltés</h3>
        <p><strong>Név:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefonszám:</strong> ${phone || "Nincs megadva"}</p>
        <p><strong>Üzenet:</strong></p>
        <p>${message}</p>
      `,
    });

    console.log("Message sent: %s", info.messageId);
    res.status(200).json({ success: true, message: "Email elküldve!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res
      .status(500)
      .json({ success: false, message: "Hiba történt az email küldésekor." });
  }
});

app.listen(PORT, "127.0.0.1", () => {
  console.log(`Server is running on port ${PORT}`);
});
