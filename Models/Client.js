const mongoose = require("mongoose");


const clientSchema = new mongoose.Schema({
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

  role:{
      type: String,
      required:true,
      enum:["admin","client","artist"],
      default:"client"
  },
  posts:[{
      type: mongoose.Schema.Types.ObjectId,
      ref:"post"
  }],
  dateOfCreation:{
      type: Date,
      default: Date.now()
  }
});

module.exports = Client = mongoose.model("Client", clientSchema);