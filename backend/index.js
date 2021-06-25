import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import productRoutes from "./routes/productRoutes.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

app.use("/api", productRoutes);
app.use("/api/auth", authRoutes)

mongoose.connect(
  process.env.URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    app.listen(5000, () => {
      console.log("Server is up and running");
    });
  }
);
