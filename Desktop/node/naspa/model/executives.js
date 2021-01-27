const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const executiveSchema = new Schema({
    president: {
        type: String,
        require: true
    },
    vice_president: {
        type: String,
        required: true
    },
    secretary: {
        type: String,
        require: true
    },
    financial_secretary: {
        type: String,
        required: true
    },
    organiser: {
        type: String,
        required: true
    },
    wocom: {
        type: String,
        require: true
    }
}, {
        timestamps: true
});

module.exports = mongoose.model('Executive', executiveSchema);