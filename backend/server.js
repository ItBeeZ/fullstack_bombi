const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const dotenv = require("dotenv");
const imageRoutes = require("./routes/imageRoutes");

dotenv.config();

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/images", imageRoutes);

// Email Configuration
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use true for port 465, false for port 587
  auth: {
    user: "balintrichard191@gmail.com",
    pass: "tnrx oxak soso idrl",
  },
  tls: {
    rejectUnauthorized: false
  }
});

app.post("/api/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const info = await transporter.sendMail({
      from: `"Bömbis István Weboldal" <balintrichard191@gmail.com>`,
      to: "balintrichard191@gmail.com",
      replyTo: email,
      subject: `Új üzenet tőle: ${name}`,
      text: `Név: ${name}\nEmail: ${email}\n\nÜzenet:\n${message}`,
      html: `
        <h3>Új kapcsolatfelvételi űrlap kitöltés</h3>
        <p><strong>Név:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Üzenet:</strong></p>
        <p>${message}</p>
      `,
    });

    console.log("Message sent: %s", info.messageId);
    res.status(200).json({ success: true, message: "Email elküldve!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Hiba történt az email küldésekor." });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
