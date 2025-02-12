import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('your_Mongo_URI').then(()=>console.log("DataBase Connected"));
}
