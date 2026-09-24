const mongoose = require('mongoose');

const calculationSchema = new mongoose.Schema({
    // This acts like a Foreign Key to link the calculation to a specific user
    userId: { 
        type: String, 
        required: true 
    }, 
    loanAmount: { type: Number, required: true },
    interestRate: { type: Number, required: true },
    tenure: { type: Number, required: true },
    emi: { type: Number, required: true },
    totalInterest: { type: Number, required: true },
    totalPayment: { type: Number, required: true },
    createdAt: { 
        type: Date, 
        default: Date.now 
    }
});

module.exports = mongoose.model('Calculation', calculationSchema);