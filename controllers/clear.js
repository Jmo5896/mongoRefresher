'use strict';

//target the index in models folder
let db = require('../models');


//creates a method for clearing out the database
module.exports = {
    clearDB: (req, res) => {
        db.Headline.remove({})
            .then(() => db.Note.remove({}))
            .then(() => res.json({ ok: true }));
    }
};