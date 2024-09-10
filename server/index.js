import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from './config/db.js';
// import userRoutes from "./routes/userRoute.js";
// import authRoutes from "./routes/authRoute.js";

const app = express();

dotenv.config()
connectDB();

app.use(express.json());
app.use(cors());

// app.use("/api/users", userRoutes);
// app.use("/api/auth", authRoutes);

app.listen(8800, () => console.log(`Server running on port ${process.env.PORT}`));
