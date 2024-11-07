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
    maintitle:{
        type:String,
        required:true
    },
    subtitle:{
        type:String,
        required:true
    },
    videolink:{
        type:String,
        required:false
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