const express = require("express");
const { addClient } = require("../Controllers/clientController");

const Router = express.Router();

Router.post("/addClient", addClient);
// Router.put("/updatePerson/:id", personUpdate);
// Router.delete("/deletePerson/:id", personDelete);
// Router.get("/getPerson", personGet);


module.exports = Router;