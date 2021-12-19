const express = require("express");
const { addClient, clientLogin } = require("../Controllers/clientController");
const { registerRules, validator } = require("../middelwares/validator");
const isAuth = require("../middelwares/passport-setup");
const Router = express.Router();

Router.post("/addClient",registerRules(),validator ,addClient);
Router.post("/login", clientLogin);
Router.get("/currentClient", isAuth(), (req, res) => res.send(req.user));
// Router.put("/updatePerson/:id", personUpdate);
// Router.delete("/deletePerson/:id", personDelete);
// Router.get("/getPerson", personGet);


module.exports = Router;