import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async () => {
  try {
    await mongoose.connect(ENV.MONGO_URI);
    console.log("Connected to DB SUCCESFUlly");
  } catch (error) {
    console.log("Error connecting to MONGODB");
    console.log(ENV.MONGO_URI);
    process.exit(1);
  }
};
