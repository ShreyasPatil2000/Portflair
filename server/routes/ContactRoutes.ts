import { Router } from "express";
import { contact } from "../controllers/contactController.ts";

const contactRoutes = Router();

contactRoutes.post("/contact", contact);

export default contactRoutes;