const express = require("express");
const isAuth = require("../middelwares/passport-setup");
const { addPost, postByIdGet, postUpdate, postDelete } = require("../Controllers/postController");
const { profileGet } = require("../Controllers/profileController");
const Router = express.Router();

Router.post("/addPost",isAuth() ,addPost);
Router.get("/currentPost", isAuth(), postByIdGet);
Router.put("/updatePost/:id",isAuth(), postUpdate);
Router.delete("/deletePost/:id", isAuth(), postDelete);
Router.get("/getPost", profileGet);


module.exports = Router;