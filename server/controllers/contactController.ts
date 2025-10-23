import { Request, Response } from "express";
import nodemailer from "nodemailer";

export const contact = async (req: Request, res: Response) => {
  try {
    const { name, email, subject, message } = req.body;
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });
    var mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Message: ${subject}`,
      text: `From: ${name} <${email}>\n\nMessage:\n${message}`,
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        return res.status(500).json({ status: false, message: "Email not sent: " + error });
      } else {
        return res.status(200).json({
          status: true,
          message: "Email sent to user: " + info.response,
          user: { name: name, email: email },
        });
      }
    });
  } catch (error) {
    console.log({ error });
    return res.status(500).send("Internal Server Error");
  }
};
