import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import { connectDB } from "./lib/db.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT;

//When express.json() is after the route, req.body won’t get parsed before hitting the authRoutes. So req.body remains undefined in the controller.
app.use(express.json());
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
  connectDB();
});
