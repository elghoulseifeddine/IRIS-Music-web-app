const express = require("express");
const { registerRules, validator } = require("../middelwares/validator");
const isAuth = require("../middelwares/passport-setup");
const { addUser, userLogin, getUserById, UserGet, UserUpdate, UserDelete } = require("../Controllers/userController");
const Router = express.Router();

Router.post("/add-user",registerRules(),validator ,addUser);
Router.post("/login-user", userLogin);
Router.get("/current-user", isAuth(), (req, res) => res.send(req.user));
Router.get("/get-user/:id", isAuth(), getUserById);
Router.get("/getUsers", UserGet);
Router.put("/update-user/:id",isAuth(), UserUpdate);
Router.delete("/delete-user/:id",isAuth(), UserDelete);


module.exports = Router;