const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Votes = require('../model/votes');

const voteRouter = express.Router();
voteRouter.use(bodyParser.json());

voteRouter.route('/')
.get((req, res, next) => {
    Votes.find({}).then((votes) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(votes);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    Votes.create(req.body).then((vote) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(vote);
    }, (err) => next(err))
    .catch((err) => next(err));
});

voteRouter.get('/:voteId', (req, res, next) => {
    Votes.findById(req.params.voteId).then((vote) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(vote);
    }, (err) => next(err))
    .catch((err) => next(err));
});

voteRouter.put('/presidential/:voteId', (req, res, next) => {
    Votes.findById(req.params.voteId).then((vote) => {
        if (vote) {
            var prez = vote.presidential_votes;
            var prezCount = prez + 1;
        }
        else {
            var err = new Error('Presidential votes not counting!');
            err.status = 404;
            return next(err);
        }
        Votes.findByIdAndUpdate(req.params.voteId, { $set: {presidential_votes: prezCount}}, {new: true}).then((prez) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json({status: 'Voted'});
        })
    }, (err) => next(err))
    .catch((err) => next(err));
});

voteRouter.put('/vice_presidential/:voteId', (req, res, next) => {
    Votes.findById(req.params.voteId).then((vote) => {
        if (vote) {
            var v_prez = vote.vice_presidential_votes;
            var v_prezCount = v_prez + 1;
        }
        else {
            var err = new Error('Vice Presidential votes not counting!');
            err.status = 404;
            return next(err);
        }
        Votes.findByIdAndUpdate(req.params.voteId, { $set: {vice_presidential_votes: v_prezCount}}, {new: true}).then((v_prez) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(v_prez);
        })
    }, (err) => next(err))
    .catch((err) => next(err));
});

voteRouter.put('/secretary/:voteId', (req, res, next) => {
    Votes.findById(req.params.voteId).then((vote) => {
        if (vote) {
            var sec = vote.secretary_votes;
            var secCount = sec + 1;
        }
        else {
            var err = new Error('Presidential votes not counting');
            err.status = 404;
            return next(err);
        }
        Votes.findByIdAndUpdate(req.params.voteId, { $set: {secretary_votes: secCount}}, {new: true}).then((sec) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(sec);
        })
    }, (err) => next(err))
    .catch((err) => next(err));
});

voteRouter.put('/financial_secretary/:voteId', (req, res, next) => {
    Votes.findById(req.params.voteId).then((vote) => {
        if (vote) {
            var fin = vote.financial_secretary_votes;
            var finCount = fin + 1;
        }
        else {
            var err = new Error('Presidential votes not counting');
            err.status = 404;
            return next(err);
        }
        Votes.findByIdAndUpdate(req.params.voteId, { $set: {financial_secretary_votes: finCount}}, {new: true}).then((fin_sec) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(fin_sec);
        })
    }, (err) => next(err))
    .catch((err) => next(err));
});

voteRouter.put('/organiser/:voteId', (req, res, next) => {
    Votes.findById(req.params.voteId).then((vote) => {
        if (vote) {
            var org = vote.organiser_votes;
            var orgCount = org + 1;
        }
        else {
            var err = new Error('Presidential votes not counting');
            err.status = 404;
            return next(err);
        }
        Votes.findByIdAndUpdate(req.params.voteId, { $set: {organiser_votes: orgCount}}, {new: true}).then((org) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(org);
        })
    }, (err) => next(err))
    .catch((err) => next(err));
});

voteRouter.put('/wocom/:voteId', (req, res, next) => {
    Votes.findById(req.params.voteId).then((vote) => {
        if (vote) {
            var wocom = vote.wocom_votes;
            var wocomCount = wocom + 1;
        }
        else {
            var err = new Error('Presidential votes not counting');
            err.status = 404;
            return next(err);
        }
        Votes.findByIdAndUpdate(req.params.voteId, { $set: {wocom_votes: wocomCount}}, {new: true}).then((wocom) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(wocom);
        })
    }, (err) => next(err))
    .catch((err) => next(err));
});

module.exports = voteRouter;