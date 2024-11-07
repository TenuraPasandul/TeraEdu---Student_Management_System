const mongoose=require('mongoose');

const courseContentSchema=new mongoose.Schema({
    courseid:{
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
    content:{
        type:String,
        required:true
    },
    videolink:{
        type:String,
        required:false
    },
});

module.exports=mongoose.model('coursecontents',courseContentSchema);