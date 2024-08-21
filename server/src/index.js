import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from "cookie-parser";
import connectDB from './db/index.js';

import userRouter from './routes/userRoute.js';


dotenv.config();

const app = express();

// Middleware
// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
connectDB();
app.use('/api/v1/users', userRouter);

const PORT = process.env.PORT || 5000;
// Start the server and connect to the database
app.listen(PORT, async () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});



