import { hashPassword, verifyPassword } from "../helpers/Auth.ts";
import { validatePassword } from "../helpers/Validation.ts";
import { prisma } from "../lib/prisma";
import { generateTempToken, generateToken, verifyToken } from "../utils/jwt.ts";
import nodemailer from "nodemailer";
import { Request, Response } from "express";

export const googleAuth = async (req: Request, res: Response) => {
  try {
  } catch (error) {
    console.log({ error });
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const signup = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) return res.status(400).json({ error: "User already exists" });
    const passwordCheck = validatePassword(password);
    if (!passwordCheck.valid) {
      return res.status(400).json({ error: passwordCheck.error });
    }
    const hashedPassword = await hashPassword(password);
    const user = await prisma.user.create({
      data: { name, email, password: hashedPassword },
    });
    const token = generateToken({ id: user.id, email: user.email });
    res.cookie("token", token, { httpOnly: true, sameSite: "lax", secure: process.env.NODE_ENV === "production" }); // secure: true on prod
    res.status(200).json({ message: "Signup successful", user: { id: user.id, name: user.name, email: user.email } });
  } catch (error) {
    console.log({ error });
    return res.status(500).send("Internal Server Error.");
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || !(await verifyPassword(password, user.password))) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    const passwordCheck = validatePassword(password);
    if (!passwordCheck.valid) {
      return res.status(400).json({ error: passwordCheck.error });
    }
    const token = generateToken({ id: user.id, email: user.email });
    res.cookie("token", token, { httpOnly: true, sameSite: "lax", secure: process.env.NODE_ENV === "production" }); // secure: true on prod
    res.status(200).json({
      message: "Login successful",
      user: { id: user.id, name: user.name, email: user.email },
    });
  } catch (error) {
    console.log({ error });
    return res.status(500).send("Internal Server Error.");
  }
};

export const logout = async (req: Request, res: Response) => {
  try {
    res.clearCookie("token", { httpOnly: true, sameSite: "lax" });
    res.status(200).json({ message: "Logged out" });
  } catch (error) {
    console.log({ error });
    return res.status(500).send("Internal Server Error.");
  }
};

export const forgotPassword = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(401).send("Invalid Credentials");
    }
    const token = generateTempToken({ id: user.id, email: user.email });
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });
    var mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Reset Your Password",
      text: `Reset your password: ${process.env.FRONTEND_URL}/reset-forgotten-password/${token}`,
      html: `<h2>Password Reset Request</h2>
      <p>Click the link below to reset your password:</p>
      <a href="${process.env.FRONTEND_URL}/reset-forgotten-password/${token}">
        Reset Password
      </a>
      <p><strong>This link expires in 5 minutes.</strong></p>
      <p>If you didn't request this, please ignore this email.</p>`,
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        return res.status(500).json({ status: false, message: "Email not sent: " + error });
      } else {
        return res.status(200).json({
          status: true,
          message: "Email sent to user: " + info.response,
          user: { id: user.id, name: user.name, email: user.email },
        });
      }
    });
  } catch (error) {
    console.log({ error });
    return res.status(500).send("Internal Server Error.");
  }
};

export const resetForgottenPassword = async (req: Request, res: Response) => {
  try {
    const { token, password } = req.body;
    if (!token) {
      return res.status(400).json({ error: "Token not found" });
    }
    if (!password) {
      return res.status(400).json({ error: "Password not found" });
    }
    const passwordCheck = validatePassword(password);
    if (!passwordCheck.valid) {
      return res.status(400).json({ error: passwordCheck.error });
    }
    let decoded: any;
    try {
      decoded = verifyToken(token);
    } catch (err) {
      return res.status(401).json({ error: "Invalid or expired token" });
    }
    const user = await prisma.user.findUnique({ where: { id: decoded.id } });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    // Verify email matches (extra security)
    if (user.email !== decoded.email) {
      return res.status(401).json({ error: "Invalid token" });
    }
    const hashedPassword = await hashPassword(password);
    await prisma.user.update({ where: { id: user.id }, data: { password: hashedPassword } });
    res.status(200).json({
      message: "Password has been reset successfully",
      user: { id: user.id, name: user.name, email: user.email },
    });
  } catch (error) {
    console.log({ error });
    return res.status(500).send("Internal Server Error.");
  }
};

export const resetPassword = async (req: Request, res: Response) => {
  try {
    const { email, password, newPassword } = req.body;
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(401).send("Invalid Credentials");
    }
    if (password === newPassword) {
      return res.status(401).send("The password and the new password are the same.");
    }
    if (!(await verifyPassword(password, user.password))) {
      return res.status(401).send("Invalid Credentials");
    }
    const passwordCheck = validatePassword(newPassword);
    if (!passwordCheck.valid) {
      return res.status(400).json({ error: passwordCheck.error });
    }
    const hashedPassword = await hashPassword(newPassword);
    await prisma.user.update({ where: { email }, data: { password: hashedPassword } });
    res.clearCookie("token");
    res.status(200).json({
      message: "Password has been updated for",
      user: { id: user.id, name: user.name, email: user.email },
    });
  } catch (error) {
    console.log({ error });
    return res.status(500).send("Internal Server Error.");
  }
};

export const deleteAcccount = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user?.id;
    if (!userId) {
      return res.status(401).send("Invalid Credentials");
    }
    const user = await prisma.user.findUnique({ where: { id: userId } });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    // Delete user
    await prisma.user.delete({ where: { id: userId } });
    res.status(200).json({
      message: "",
      user: { id: user.id, name: user.name, email: user.email },
    });
  } catch (error) {
    console.log({ error });
    return res.status(500).send("Internal Server Error.");
  }
};
