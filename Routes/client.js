const express = require("express");
const { addClient, clientLogin, clientUpdate, clientDelete, clientGet } = require("../Controllers/clientController");
const { registerRules, validator } = require("../middelwares/validator");
const isAuth = require("../middelwares/passport-setup");
const Router = express.Router();

Router.post("/addClient",registerRules(),validator ,addClient);
Router.post("/login", clientLogin);
Router.get("/currentClient", isAuth(), (req, res) => res.send(req.user));
Router.put("/updateClient/:id", clientUpdate);
Router.delete("/deleteClient/:id", clientDelete);
Router.get("/getClients", clientGet);


module.exports = Router;