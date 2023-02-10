const express = require("express");
const { carryAndSum } = require("../controller/homeController");
const homeRouter = express.Router();

// home router-
homeRouter.post("/carry-sum", carryAndSum);

module.exports = {homeRouter};