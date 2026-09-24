const mongoose = require('mongoose');

// Define what a User looks like
const userSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String, 
        required: true, 
        unique: true // No two users can have the same email
    },
    password: { 
        type: String, 
        required: true 
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    }
});

// Export this blueprint so our server can use it
module.exports = mongoose.model('User', userSchema);