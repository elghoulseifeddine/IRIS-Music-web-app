const Artist = require("../Models/Artist");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// ************************************ Add artist *************************************

exports.addArtist = async (req, res) => {
    const newArtist = new Artist({ ...req.body });
    const email = newArtist.email;
    const artist = await Artist.findOne({ email });
    if (artist) {
      return res.status(404).json({ msg: "artist already exist" });
    }
  
    try {
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(newArtist.password, salt);
  
      newArtist.password = hash;
  
      await newArtist.save();
      res.status(201).json({ msg: "Register artist success" });
    } catch (error) {
      console.log(error);
      res.status(401).json({ msg: "Register artist Failed" });
    }
  };

  // ************************************ login artist *************************************


  exports.artistLogin = async (req, res) => {
    const { email, password } = req.body;
  
    const artist = await Artist.findOne({ email });
  
    if (!artist) return res.status(401).json({ msg: "Bad credentiel" });
  
    const isMatch = await bcrypt.compare(password, artist.password);
  
    if (!isMatch) return res.status(401).json({ msg: "Bad credentiel" });
  
    try {
      const payload = {
        id: artist._id,
        firstName: artist.firstName,
        lastName: artist.lastName,
        email: artist.email,
        role: artist.role
      };
  
      const token = await jwt.sign(payload, process.env.secretOrPrivateKey);
  
      res.status(200).json({ token: `Bearer ${token}` });
    } catch (err) {
      console.log(err)
      res.status(400).json({ errors: err });
    }
  };


  // ************************************ update artist *************************************



  exports.artistUpdate = async (req, res) => {
    const { id } = req.params;
    try {
      await Artist.findByIdAndUpdate(id,req.body)
      res.status(201).json({ msg: "Updated artist success" });
    } catch (error) {
      console.log("3 : ", error);
      res.status(401).json({ msg: "Updated artist Failed" });
    }
  };


    // ************************************ Delete artist *************************************


  exports.artistDelete = async (req, res) => {
    const { id } = req.params;
    try {
      await Artist.findByIdAndRemove(id)
      res.status(201).json({ msg: "Deleted artist success"  });
    } catch (error) {
      res.status(401).json({ msg: "Deleted artist Failed" });
    }
  };


      // ************************************ Get artist *************************************


  exports.artistGet = async (req, res) => {

    const allArtists = await Artist.find()
  
    try {
      await 
      res.status(201).json({ msg: "Get artists success" , allArtists});
    } catch (error) {
      console.log(error);
      res.status(401).json({ msg: "Get artists Failed" });
    }
  };