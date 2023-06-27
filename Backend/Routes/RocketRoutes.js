const { getRockets, getOneRocket } = require("../Controllers/RocketController");

const routes = require("express").Router();
routes.get("/rockets", getRockets);
routes.get("/rocket/:id", getOneRocket);
module.exports = routes;
