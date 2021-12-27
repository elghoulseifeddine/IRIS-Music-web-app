const Profile= require("../Models/Profile");
const User = require("../Models/User");

// ************************************ Add Profile *************************************

exports.addProfile = async (req, res) => {
  const newProfile = new Profile({ userId: req.user._id, ...req.body });
  try {
    const profile = await newProfile.save();
    const user  = await User.findOne({_id : req.user._id})
    user.profile =  profile._id
    user.save();
    res.status(201).json({ msg: "Register Profile success", profile });
  } catch (error) {
    console.log(error);
    res.status(401).json({ msg: "Register Profile Failed" }); 
  }
};

// ************************************ update profile *************************************



exports.profileUpdate = async (req, res) => {
    const { id } = req.params;
    try {
      await Profile.findByIdAndUpdate(id,req.body)
      res.status(201).json({ msg: "Updated profile success" });
    } catch (error) {
      console.log("3 : ", error);
      res.status(401).json({ msg: "Updated profile Failed" });
    }
  };


  // ************************************ Get all profiles *************************************
  

  exports.profileGet = async (req, res) => {

    const allProfiles = await Profile.find().populate("userId")
  
    try {
      await 
      res.status(201).json({ msg: "Get profiles success" , allProfiles});
    } catch (error) {
      console.log(error);
      res.status(401).json({ msg: "Get profiles Failed" });
    }
  };

   // ************************************ Get profile by id *************************************
  

   exports.profileByIdGet = async (req, res) => {

    const { id } = req.params;
    const Profile = await Profile.findById(id).populate("userId")
  
    try {
      await 
      res.status(201).json({ msg: "Get profile success" , Profile});
    } catch (error) {
      console.log(error);
      res.status(401).json({ msg: "Get profile Failed" });
    }
  };


      // ************************************ Delete profile *************************************


      exports.profileDelete = async (req, res) => {
        const { id } = req.params;
        try {
          await Profile.findByIdAndRemove(id)
          res.status(201).json({ msg: "Deleted profile success"  });
        } catch (error) {
          res.status(401).json({ msg: "Deleted profile Failed" });
        }
      };
