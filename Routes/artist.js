const express = require("express");
const { registerRules, validator } = require("../middelwares/validator");
const isAuth = require("../middelwares/passport-setup");
const { addArtist, artistLogin, artistUpdate, artistDelete, artistGet } = require("../Controllers/artistController");
const Router = express.Router();

Router.post("/addArtist",registerRules(),validator ,addArtist);
Router.post("/login", artistLogin);
Router.get("/currentArtist", isAuth(), (req, res) => res.send(req.user));
Router.put("/updateArtist/:id", artistUpdate);
Router.delete("/deleteArtist/:id", artistDelete);
Router.get("/getArtist", artistGet);


module.exports = Router;