'use strict';

let mongoose = require('mongoose');

//create a schema
let Schema = mongoose.Schema;

//create headline schema
let healineSchema = new Schema({
    //headline, string, must be entered
    headline: {
        type: String,
        required: true,
        unique: { index: { unique: true } }
    },
    //summary, string, must be entered
    summary: {
        type: String,
        required: true
    },
    //url, string, must be entered
    url: {
        type: Date,
        default: Date.now
    },
    //date, string
    date: {
        type: Date,
        default: Date.now
    },
    saved: {
        type: Boolean,
        default:false
    }
});

//create headling model using the schema above
let Headline = mongoose.model('Headline', healineSchema);

module.exports = Headline;