import { Router } from "express";
import {
  login,
  signup,
  logout,
  forgotPassword,
  deleteAcccount,
  resetPassword,
  resetForgottenPassword,
  googleAuth,
} from "../controllers/AuthController.ts";
import { authenticateToken } from "../middleware/AuthMiddleware.ts";

const authRoutes = Router();

authRoutes.post("/google-auth", googleAuth);
authRoutes.post("/signup", signup);
authRoutes.post("/login", login);
authRoutes.post("/logout", logout);
authRoutes.post("/forgot-password", forgotPassword);
authRoutes.post("/reset-password", resetPassword);
authRoutes.delete("/delete-account", authenticateToken, deleteAcccount);
authRoutes.post("/reset-forgotten-password/", resetForgottenPassword);

export default authRoutes;
