// import mongoose from 'mongoose';
// // const url="mongodb://127.0.0.1:27017/MxpertzDB";
// const url = "mongodb+srv://suraj888:suraj888@123@cluster0.vdzs8.mongodb.net/hospitaldb?retryWrites=true&w=majority&appName=Cluster0"
// mongoose.set('strictQuery',false)
// mongoose.connect(url);
// console.log("Successfully connected to mongodb database...");


import mongoose from 'mongoose';

const url = "mongodb+srv://suraj888:suraj888%40123@cluster0.vdzs8.mongodb.net/hospitaldb?retryWrites=true&w=majority";


mongoose.set('strictQuery', false);

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Successfully connected to MongoDB database..."))
  .catch((err) => console.error("MongoDB connection error:", err));
