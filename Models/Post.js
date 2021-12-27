const mongoose = require("mongoose");


const postSchema = new mongoose.Schema({
userId:{
    type: mongoose.Schema.Types.ObjectId,
      ref:"User"
},
  image:{
      type: String,
  },
  video:{
      type: String
  },
  body:{
    type: String,
},

  dateOfCreation:{
      type: Date,
      default: Date.now()
  }
});

module.exports = mongoose.model("Post", postSchema);