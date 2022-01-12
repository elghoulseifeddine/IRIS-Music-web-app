const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "No first name typed"],
  },
  lastName: {
    type: String,
    required: [true, "No last name typed"],
  },
  email:{
      type: String,
      required: [true, "No email typed"]
  },
  password: {
      required:true,
      type: String,
      min: 6,
      max: 20
  },
  tel:{
    required:true,
    type: String
  },

  role:{
      type: String,
      required:true,
      enum:["adminLatt","client","artist"],
      default:"client"
  },
  style:{
      type: String,
      enum:["Band","Troupe","Soliste","DJ","Rapper"],
      default:"Soliste"
  },
  
  posts:[{
      type: mongoose.Schema.Types.ObjectId,
      ref:"Post"
  }],


  description:{
    type: String,
   },
    image:{
        type: String,
    },
  genre:{
      type: String,
        enum:["Jazz","Rock","Orientale","Occidentale","World music","Rap","Ray","HipHop","Electro","House","Autre"],
  },
  instrument:{
      type: String,
        enum:["Violon","Aoud","Clavier","Drums","Percussions","Flute","Guitar","Guitar Bass","Saxo","Kanoun","Autre"],
  
      },
  rating:{
    type: Number,
    min: 1,
    max: 5,
    default:1
  },

  dateOfCreation:{
      type: Date,
      default: Date.now()
  }
});

module.exports = mongoose.model("User", userSchema);




