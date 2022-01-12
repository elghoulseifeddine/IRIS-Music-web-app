// const mongoose = require("mongoose");


// const profileSchema = new mongoose.Schema({
// userId:{
//     type: mongoose.Schema.Types.ObjectId,
//       ref:"User"
// },
//  description:{
//   type: String,
//  },
//   image:{
//       type: String,
//   },
// genre:{
//     type: String,
//       required:true,
//       enum:["Jazz","Rock","Orientale","Occidentale","World music","Rap","Ray","HipHop","Electro","House","Autre"],
// },
// instrument:{
//     type: String,
//       enum:["Violon","Aoud","Clavier","Drums","Percussions","Flute","Guitar","Guitar Bass","Saxo","Kanoun","Autre"],
// },
// rating:{
//   type: Number,
//   min: 1,
//   max: 5,
//   required: true,
//   default:1
// },

//   dateOfCreation:{
//       type: Date,
//       default: Date.now()
//   }
// });

// module.exports = mongoose.model("Profile", profileSchema);