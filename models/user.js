const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
    min: 0,
  },
  diseases: {
    type: String,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    min: 8,
  },

   Occupation:{
     type: String,
     required: true,
   },
   Insurance_Plan:{
     type: String,
    //  required: true,
   },
   Emergency_Contact_Person:{
     type: String,
    //  required: true,
   },
   Address:{
     type: String,
    //  required: true,
   },
   Home_Phone:{
     type: String,
    //  required: true,
   },
  Cell_Phone :{
     type: String,
    //  required: true,
  },
   Current_Height:{
     type: String,
  //  required: true,
   },
   Current_Weight:{
     type: Number,
    //  required: true,
  },
   Medications:{
     type:String,
    //  required:true,
   },
   Surgeries:{
     type:String,
    //  required:true,
  },
  Sleep:{
    type:Number,
    //  required:true,
  },
   Hospitalizations:{
     type:String,
    // required:true,

  },
  Exercise_hours:{
    type:Number,
    // required:true,
  },
  Allergies:{
    type:String,
    // required:true,
  },
  Others:{
    type:String,
    // required:true,
  },

});

module.exports = mongoose.model("Patients", userSchema);
