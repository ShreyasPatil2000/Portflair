import { Router } from "express";
import {
  login,
  signup,
  logout,
  forgotPassword,
  deleteAcccount,
  resetPassword,
  resetForgottenPassword,
} from "../controllers/AuthController.ts";

const authRoutes = Router();

authRoutes.post("/signup", signup);
authRoutes.post("/login", login);
authRoutes.post("/logout", logout);
authRoutes.post("/forgot-password", forgotPassword);
authRoutes.post("/reset-password", resetPassword);
authRoutes.post("/delete-account", deleteAcccount);
authRoutes.post("/reset-forgotten-password/", resetForgottenPassword);

export default authRoutes;
