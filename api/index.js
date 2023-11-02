import mongoose from "mongoose";
import dotenv from 'dotenv';
import express from "express";

import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  }).catch((err) => {
    console.error(err);
  });

const app = express();

app.listen(3000, () => {
  console.log('Server listening on port 3000');
})

app.use(express.json());
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);