const Post= require("../Models/Post");
const User = require("../Models/User");

// ************************************ Add Post *************************************

exports.addPost = async (req, res) => {
  const newPost = new Post({ userId: req.user._id, ...req.body });
  try {

    

    const post = await newPost.save();

     const user  = await User.findOne({_id : req.user._id})
     user.posts = [...user.posts , post._id]
     user.save()
    res.status(201).json({ msg: "Register Post success", post });
  } catch (error) {
    console.log(error);
    res.status(401).json({ msg: "Register Post Failed" });
  }
};

// ************************************ update post *************************************



exports.postUpdate = async (req, res) => {
    const { id } = req.params;
    try {
      await Post.findByIdAndUpdate(id,req.body)
      res.status(201).json({ msg: "Updated post success" });
    } catch (error) {
      console.log("3 : ", error);
      res.status(401).json({ msg: "Updated post Failed" });
    }
  };


  // ************************************ Get all posts *************************************
  

  exports.postGet = async (req, res) => {

    const allPosts = await Post.find().populate("userId")
  
    try {
      await 
      res.status(201).json({ msg: "Get posts success" , allPosts});
    } catch (error) {
      console.log(error);
      res.status(401).json({ msg: "Get posts Failed" });
    }
  };

   // ************************************ Get post by id *************************************
  

   exports.postByIdGet = async (req, res) => {

    const { id } = req.params;
    const Post = await Post.findById(id).populate("userId")
  
    try {
      await 
      res.status(201).json({ msg: "Get post success" , Post});
    } catch (error) {
      console.log(error);
      res.status(401).json({ msg: "Get post Failed" });
    }
  };


      // ************************************ Delete post *************************************


      exports.postDelete = async (req, res) => {
        const { id } = req.params;
        try {
          await Post.findByIdAndRemove(id)
          const user  = await User.findOne({_id : req.user._id})
     user.posts.filter(el=>el._id!==id)
          res.status(201).json({ msg: "Deleted post success"  });
        } catch (error) {
          console.log(error)
          res.status(401).json({ msg: "Deleted post Failed" , error});
        }
      };
