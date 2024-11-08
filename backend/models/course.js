const mongoose=require('mongoose');

const courseSchema=new mongoose.Schema({
    coursename:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    teachername:{
        type:String,
        required:true
    },
    teacherid:{
        type:String,
        required:true
    },
    studentid:{
        type:Array,
        required:false
    },

});

module.exports=mongoose.model('courses',courseSchema);