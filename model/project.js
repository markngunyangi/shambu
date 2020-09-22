const mongoose = require("mongoose");


const Schema = mongoose.Schema;

//SERVICE SCHEMA
const projectSchema = new Schema({
    typeOfService: {
        type: Schema.Types.ObjectId,
        ref:"Param",
        required: true
    },
    typeofPaper: {
        type: Schema.Types.ObjectId,
        ref:"Param",
        required: true
    },
    subject: {
        type: Schema.Types.ObjectId,
        required: true,
        ref:"Param"
    },
    topic:{
        type:String,
        required:true,
    },
    additionalInformation:{
        type:String,
        required:true,
    },
    documentStyle:{
        type:String,
        required:true
    },
    urgency:{
        type: Number,
        required: true,
        ref:"Param" 
    },
    numberOfSources:{
        type:Number,
        required:true,
    },
    academicLevel:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:"Param"
     },
     numberOfPages:{
         type:Number,
         required:true,
         ref:"Param"
     }


});
module.exports = mongoose.model('Project', projectSchema);