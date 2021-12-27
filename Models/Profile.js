const mongoose = require("mongoose");


const profileSchema = new mongoose.Schema({
userId:{
    type: mongoose.Schema.Types.ObjectId,
      ref:"User"
},
  image:{
      type: String,
  },
  phone:{
    type: String,
    required: true
},
genre:{
    type: String,
      required:true,
      enum:["Jazz","Rock","Orientale","Occidentale","World music","Rap","Ray","Autre"],
},
Instrument:{
    type: String,
      enum:["Violon","Aoud","Clavier","Drums","Percussions","Flute","Guitar","Guitar Bass","Autre"],
},
rating:{
  type: Number,
  min: 1,
  max: 5,
  required: true,
},

  dateOfCreation:{
      type: Date,
      default: Date.now()
  }
});

module.exports = mongoose.model("Profile", profileSchema);