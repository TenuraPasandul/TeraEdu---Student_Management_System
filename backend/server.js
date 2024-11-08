const express = require('express');
const mongoose=require('mongoose');
const bodyParser =require('body-parser');
const cors=require('cors');

const app=express();



const userRoutes=require('./routes/user');
const courseRoutes=require('./routes/course');
const courseContentRoutes=require('./routes/courseContent');

app.use(bodyParser.json());
app.use(cors()); 

app.use(userRoutes);
app.use(courseRoutes);
app.use(courseContentRoutes);

const PORT=8000;
const DB_URL='mongodb+srv://TenuraPasandul:oUwQeJr0ibD2vJAS@teraedu.gyw54.mongodb.net/?retryWrites=true&w=majority&appName=TeraEdu';

mongoose.connect(DB_URL)
.then(()=>{
    console.log('DB connected');
})
.catch((err)=>console.log('DB connection error',err));


app.listen(PORT, ()=>{
    console.log(`App is running on ${PORT}`);
});