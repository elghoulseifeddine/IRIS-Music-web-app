const express = require("express");
const isAuth = require("../middelwares/passport-setup");
const { addPost, postByIdGet, postUpdate, postDelete } = require("../Controllers/postController");
const { postGet } = require("../Controllers/postController");
const Router = express.Router();

Router.post("/addPost",isAuth() ,addPost);
Router.get("/currentPost/:id", isAuth(), postByIdGet);
Router.put("/updatePost/:id",isAuth(), postUpdate);
Router.delete("/deletePost/:id", isAuth(), postDelete);
Router.get("/getPost", postGet);


module.exports = Router;