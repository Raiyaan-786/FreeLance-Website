import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config();
mongoose.set("strictQuery", true);

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to MongoDB")
    } catch (error){
        console.log(error);
    }
};

app.listen(process.env.PORT ,() => {
    connect();
    console.log(`Backend Server Running on port ${process.env.PORT}`);
})