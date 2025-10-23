import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/AuthRoutes.ts";
import profileRoutes from "./routes/ProfileRoutes.ts";
import { prisma } from "./lib/prisma"; // optional, for DB health check
import contactRoutes from "./routes/ContactRoutes.ts";
import searchRoutes from "./routes/searchRoutes.ts";

const app = express();
const PORT = process.env.PORT || 3001;
dotenv.config();

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.use(
  cors({
    origin: process.env.FRONTEND_URL, // Vite default, or 3000 if using CRA
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true, // only if you're using cookies
  })
);

app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/search", searchRoutes);
app.use("/api/misc", contactRoutes);

app.get("/", async (req, res) => {
  try {
    await prisma.$connect(); // optional DB health check
    res.send("✅ Server and DB are running!");
  } catch (error) {
    res.status(500).send("❌ DB connection failed");
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
