import mongoose from 'mongoose';
const url="mongodb://127.0.0.1:27017/MxpertzDB";
mongoose.set('strictQuery',false)
mongoose.connect(url);
console.log("Successfully connected to mongodb database...");