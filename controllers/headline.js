'use strict';

let db = require('../models');

module.exports = {
    //find all headlines and sort them by date
    findAll: (req, res) => {
        db.Headline
            .find(req.query)
            .sort({ date: -1 })
            .then(dbHeadline => res.json(dbHeadline));
    },
    //delete a headline
    delete: (req, res) => {
        db.Headline.remove({ _id: req.params.id })
            .then(dbHeadline => res.json(dbHeadline));
    },
    //update a headline
    upate: (req, res) => {
        db.Headline
            .findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true })
            .then(dbHeadline => res.json(dbHeadline));
    }
};