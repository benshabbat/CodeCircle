import express from "express";
import cors from "cors";
// import userRoutes from "./routes/userRoute.js";
import authRoutes from "./routes/authRoute.js";

const PORT = "5000";
const app = express();

app.use(express.json());
app.use(cors());

// app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

app.listen(8800, () => console.log(`Server running on port ${PORT}`));
