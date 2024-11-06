const express = require('express');
const mongoose=require('mongoose');
const bodyParser =require('body-parser');
const cors=require('cors');

const app=express();

const userRoutes=require('./routes/user');
app.use(bodyParser.json());
app.use(cors());

app.use(userRoutes);

const PORT=8000;
const DB_URL='mongodb+srv://tenurapasandul2000:rthAdhJ9EclaDxRF@cluster0.sfymm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(DB_URL)
.then(()=>{
    console.log('DB connected');
})
.catch((err)=>console.log('DB connection error',err));

app.listen(PORT, ()=>{
    console.log(`App is running on ${PORT}`);
});