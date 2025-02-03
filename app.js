import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import appointmentRoutes from './routes/appointmentRoutes.js';


const app=express();


app.use(express.json());
app.use(cors());
app.use('/api', appointmentRoutes);


//import api routers
import userRouter from './routes/user.router.js';
import categoryRouter from './routes/category.router.js';


//to resolve cross origin problem
app.use(cors());

//to extract file content
app.use(fileUpload());

//to extract body data from request (POST , PUT , DELETE , PATCH)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//route level middleware to load api router
app.use("/user",userRouter);
app.use("/category",categoryRouter);

app.listen(3001);
console.log("server invoked at link http://localhost:3001");