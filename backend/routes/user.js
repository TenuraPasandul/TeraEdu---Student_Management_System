const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    pass:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true 
    },
    qualifications:{
        type:String,
        required:false
    },
    profilepic: {
        type: String, 
        required: true
    }
});

module.exports=mongoose.model('users',userSchema);