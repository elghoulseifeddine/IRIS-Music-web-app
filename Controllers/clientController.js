const Client = require("../Models/Client");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// ************************************ Add client *************************************

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
      res.status(201).json({ msg: "Register client success" });
    } catch (error) {
      console.log(error);
      res.status(401).json({ msg: "Register client Failed" });
    }
  };

  // ************************************ login client *************************************


  exports.clientLogin = async (req, res) => {
    const { email, password } = req.body;
  
    const client = await Client.findOne({ email });
  
    if (!client) return res.status(401).json({ msg: "Bad credentiel" });
  
    const isMatch = await bcrypt.compare(password, client.password);
  
    if (!isMatch) return res.status(401).json({ msg: "Bad credentiel" });
  
    try {
      const payload = {
        id: client._id,
        firstName: client.firstName,
        lastName: client.lastName,
        email: client.email,
        role: client.role
      };
  
      const token = await jwt.sign(payload, process.env.secretOrPrivateKey);
  
      res.status(200).json({ token: `Bearer ${token}` });
    } catch (err) {
      console.log(err)
      res.status(400).json({ errors: err });
    }
  };


  // ************************************ update client *************************************



  exports.clientUpdate = async (req, res) => {
    const { id } = req.params;
    // let client = await Client.findById(id);
    try {
      await Client.findByIdAndUpdate(id,req.body)
      res.status(201).json({ msg: "Updated client success" });
    } catch (error) {
      console.log("3 : ", error);
      res.status(401).json({ msg: "Updated client Failed" });
    }
  };


    // ************************************ Delete client *************************************


  exports.clientDelete = async (req, res) => {
    const { id } = req.params;
    try {
      await Client.findByIdAndRemove(id)
      res.status(201).json({ msg: "Deleted client success"  });
    } catch (error) {
      res.status(401).json({ msg: "Deleted client Failed" });
    }
  };


      // ************************************ Get client *************************************


  exports.clientGet = async (req, res) => {

    const allClients = await Client.find()
  
    try {
      await 
      res.status(201).json({ msg: "Get clients success" , allClients});
    } catch (error) {
      console.log(error);
      res.status(401).json({ msg: "Get clients Failed" });
    }
  };