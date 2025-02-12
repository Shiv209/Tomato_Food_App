import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://shivkumarainwad:G8VmhB54lCRFsHUO@cluster1.dql2w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1').then(()=>console.log("DataBase Connected"));
}