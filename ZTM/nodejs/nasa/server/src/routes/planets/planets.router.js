const express = require('express');
const {
    getAllplanets
} = require('./planets.controller');

const planetsRouter = express.Router();

planetsRouter.get('/',getAllplanets);

module.exports = planetsRouter;

