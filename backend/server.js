// const express = require('express');
// const mongoose = require('mongoose');
// const app = express();

// mongoose.connect("mongodb+srv://jobuser:Rs3XvAMHE3eaUZq9@cluster0.rhyxcxe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",{
//    useUnifiedTopology: true, 
//    useNewUrlParser: true
// }).then(
//     () => console.log('DB Connection establishing')
// )

// app.get('/', (req,res) =>{
//     res.send('hello world')
// })


// app.listen(5000,() => {
//     console.log('SERVER RUNNING..')
// })



import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import jobRoutes from "./routes/jobRoutes.js";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/jobs", jobRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
