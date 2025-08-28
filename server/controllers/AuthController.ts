import { hashPassword, verifyPassword } from "../helpers/Auth.ts";
import { prisma } from "../lib/prisma";
import { generateToken } from "../utils/jwt.ts";

export const signup = async (req: any, res: any) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) return res.status(400).json({ error: "User already exists" });

    const hashedPassword = await hashPassword(password);
    const user = await prisma.user.create({
      data: { name, email, password: hashedPassword },
    });

    const token = generateToken({ id: user.id, email: user.email });
    res.cookie("token", token, { httpOnly: true, sameSite: "lax" }); // secure: true on prod
    res.json({ message: "Signup successful", user: { id: user.id, name: user.name, email: user.email } });
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

    const token = generateToken({ id: user.id, email: user.email });
    res.cookie("token", token, { httpOnly: true, sameSite: "lax" }); // secure: true on prod
    res.json({ message: "Login successful", user: { id: user.id, name: user.name, email: user.email } });
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

export const forgotPassword = async (req: any, res: any) => {};

export const resetPassword = async (req: any, res: any) => {};

export const deleteAcccount = async (req: any, res: any) => {};
