const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    Education: {
        type: String,
        required: true
    },
    Experience: {
        type: String,
        required: true
    },
    Responsibility: {
        type: String,
        required: true
    },
    Skills: {
        type: String,
        required: true
    },
    WorkSample: {
        type: String, 
        required: true
    },
    Additional: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Student', StudentSchema);
