import mongoose from "mongoose";

export const connectDB = async ()=>{
  try{
    console.log("connecting to database");
    console.log("CONNECTION_STRING", process.env.CONNECTION_STRING);
    const connect = await mongoose.connect(process.env.CONNECTION_STRING);
    console.log("Database connected successfully", connect.connection.host, connect.connection.name);
  }catch(err){
    console.error(err.message);
    process.exit(1);
  }
}

export default connectDB;
