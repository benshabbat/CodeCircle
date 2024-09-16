import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from './config/db.js';
import userRoutes from "./routes/userRoute.js";
import authRoutes from "./routes/authRoute.js";
import cookieParser from "cookie-parser"
const app = express();

dotenv.config()
connectDB();

app.use(cookieParser());
app.use(express.json());
app.use(cors());

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);


//TODO: NEXT MIDDLEWARE MESSAGE ERROR

app.use((req,res,next)=>{
    console.log("check")
})

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
