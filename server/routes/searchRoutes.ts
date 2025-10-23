import { Router } from "express";
import { authenticateToken } from "../middleware/AuthMiddleware.ts";

const searchRoutes = Router();

export default searchRoutes;