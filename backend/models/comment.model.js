var mongoose = require('mongoose');

var commentSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    post_id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        unique: true
    },
    content: {
        type: String,
        required: true
    },
    created_utc: {
        type: String
    },
    username: {
        type: String
    }
});

module.exports = mongoose.model('Comment', commentSchema);