'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let noteSchema = new Schema({
    //the headline is the article associated with the note
    _headlineId: {
        type: Schema.Types.ObjectId,
        ref: 'Headline'
    },
    date: {
        type: Date,
        default: Date.now
    },
    notText: String
});

//create model with the schema above
let Note = mongoose.model('Note', noteSchema);

module.exports = Note;