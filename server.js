require('dotenv').config(); 
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); 
const User = require('./models/User');
const Calculation = require('./models/Calculation'); 

const app = express();

app.use(cors());
app.use(express.json());

// This is the part that connects the database!
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Database connected successfully!"))
    .catch((error) => console.log("Database connection failed:", error));

app.get('/', (req, res) => {
    res.send('The Financial Insights backend is running!');
});

app.post('/api/signup', async (req, res) => {
    try {
        const userData = req.body; 
        console.log("New user trying to sign up:", userData);

        // 1. Tell MongoDB to create a new user using our Blueprint
        const newUser = await User.create(userData);

        // 2. Tell the frontend it was successful
        res.json({ 
            message: "User successfully saved to the database!", 
            user: newUser 
        });

    } catch (error) {
        console.log("Error saving user:", error);
        res.status(500).json({ message: "Something went wrong", error: error.message });
    }
});

// --- LOGIN ROUTE ---
app.post('/api/login', async (req, res) => {
    try {
        // 1. Grab the email and password the user typed
        const { email, password } = req.body;

        // 2. Look for this email in the database
        const user = await User.findOne({ email: email });

        // 3. If the user doesn't exist, send an error
        if (!user) {
            return res.status(400).json({ message: "User not found! Please sign up first." });
        }

        // 4. If the user exists, check if the password matches
        if (user.password !== password) {
            return res.status(400).json({ message: "Incorrect password!" });
        }

        // 5. If everything is correct, welcome them in!
        res.json({ 
            message: "Login successful!", 
            user: { name: user.name, email: user.email } 
        });

    } catch (error) {
        console.log("Error logging in:", error);
        res.status(500).json({ message: "Something went wrong", error: error.message });
    }
});

// --- SAVE EMI CALCULATION ROUTE ---
app.post('/api/save-emi', async (req, res) => {
    try {
        const emiData = req.body;
        console.log("Saving new EMI calculation:", emiData);

        // Tell MongoDB to save it
        const savedCalculation = await Calculation.create(emiData);

        res.json({ 
            message: "Calculation saved successfully!", 
            data: savedCalculation 
        });

    } catch (error) {
        console.log("Error saving calculation:", error);
        res.status(500).json({ message: "Failed to save calculation", error: error.message });
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});