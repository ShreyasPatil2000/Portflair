import { Router } from "express";
import { login, signup, logout, forgotPassword, deleteAcccount, resetPassword } from "../controllers/AuthController.ts";

const authRoutes = Router();

authRoutes.post("/signup", signup);
authRoutes.post("/login", login);
authRoutes.post("/logout", logout);
authRoutes.post("/forgot-password", forgotPassword);
authRoutes.post("/reset-password", resetPassword);
authRoutes.post("/delete", deleteAcccount);

export default authRoutes;
