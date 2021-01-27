const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const Executives = require('../model/executives');

const executiveRouter = express.Router();
executiveRouter.use(bodyParser.json());

executiveRouter.route('/')
.get((req, res, next) => {
    Executives.find({}).then((executives) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(executives);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    Executives.create(req.body).then((executive) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(executive);
    }, (err) => next(err))
    .catch((err) => next(err));
});

executiveRouter.route('/:prezId')
.put((req, res, next) => {
    Executives.findByIdAndUpdate({_id: req.params.prezId}, {
        $set: req.body
    }, {new: true}).then((executive) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(executive);
    }, (err) => next(err))
    .catch((err) => next(err));
});

module.exports = executiveRouter;