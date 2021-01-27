const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const voteSchema = new Schema({
    presidential_votes: {
        type: Number,
        required: true
    },
    vice_presidential_votes: {
        type: Number,
        required: true
    },
    secretary_votes: {
        type: Number,
        required: true
    },
    financial_secretary_votes: {
        type: Number,
        required: true
    },
    organiser_votes: {
        type: Number,
        required: true
    },
    wocom_votes: {
        type: Number,
        required: true
    }
}, { 
    timestamps: true
});

module.exports = mongoose.model('Vote', voteSchema);