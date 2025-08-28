import { Router } from "express";
import { getProfile, editProfile } from "../controllers/ProfileController.ts";
import { authenticateToken } from "../middleware/AuthMiddleware.ts";

const profileRoutes = Router();

profileRoutes.get("/get-profile", authenticateToken, getProfile);
profileRoutes.post("/edit-profile", authenticateToken, editProfile);

export default profileRoutes;