const Client = require("../Models/Client");
const bcrypt = require("bcryptjs");



exports.addClient = async (req, res) => {
    const newClient = new Client({ ...req.body });
    const email = newClient.email;
    const client = await Client.findOne({ email });
    if (client) {
      return res.status(404).json({ msg: "Client already exist" });
    }
  
    try {
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(newClient.password, salt);
  
      newClient.password = hash;
  
      await newClient.save();
      res.status(201).json({ msg: "Register success" });
    } catch (error) {
      console.log(error);
      res.status(401).json({ msg: "Register Failed" });
    }
  };