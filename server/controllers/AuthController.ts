import { hashPassword, verifyPassword } from "../helpers/Auth.ts";
import { prisma } from "../lib/prisma";
import { generateTempToken, generateToken } from "../utils/jwt.ts";
import nodemailer from "nodemailer";

export const signup = async (req: any, res: any) => {
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

export const login = async (req: any, res: any) => {
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

export const logout = async (req: any, res: any) => {
  try {
    res.clearCookie("token", { httpOnly: true, sameSite: "lax" });
    res.status(200).json({ message: "Logged out" });
  } catch (error) {
    console.log({ error });
    return res.status(500).send("Internal Server Error.");
  }
};

export const forgotPassword = async (req: any, res: any) => {
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
      subject: "Reset Password",
      text: `http://localhost:5173/reset-forgotten-password/${token}`,
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

export const resetForgottenPassword = async (req: any, res: any) => {
  try {
    const { token, password } = req.body;
    if(!token) {
      req.status(400).send("Token not found.");
    }
    if(!password) {
      req.status(400).send("Password not found.");
    }
  } catch (error) {
    console.log({ error });
    return res.status(500).send("Internal Server Error.");
  }
};

export const resetPassword = async (req: any, res: any) => {
  try {
    const { email, password, newPassword } = req.body;
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(401).send("Invalid Credentials");
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

export const deleteAcccount = async (req: any, res: any) => {
  try {
  } catch (error) {
    console.log({ error });
    return res.status(500).send("Internal Server Error.");
  }
};
