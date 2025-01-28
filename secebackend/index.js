const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Signup = require('./models/signupSchema');
const Login = require('./models/loginSchema');

dotenv.config();

const app = express();
app.use(express.json());
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MongoDB Connection Successful");
    })
    .catch((err) => {
        console.error("MongoDB Connection Unsuccessful:", err.message);
    });
app.get('/', (req, res) => {
    res.send(`
        Welcome to the backend, my friend!
        Your roller coaster starts now. 
        Fasten your codebase so you can catch up with what's being taught!
    `);
});
app.get('/static', (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});
app.post('/signup', async (req, res) => {
    const { firstName, lastName, userName, email, password } = req.body;

    try {
        const newSignup = new Signup({
            firstName,
            lastName,
            userName,
            email,
            password
        });

        await newSignup.save();
        res.status(201).send("SignUp Successful");
    } catch (err) {
        res.status(400).send({ message: "SignUp Unsuccessful", error: err.message });
    }
});
app.post('/login', async (req, res) => {
    const { userName, password } = req.body;

    try {
        const newLogin = new Login({
            userName,
            password
        });

        await newLogin.save();
        res.status(201).send("Login Successful");
    } catch (err) {
        res.status(400).send({ message: "Login Unsuccessful", error: err.message });
    }
});
app.get('/getsignupdet', async (req, res) => {
    try {
        const signUpdet = await Signup.find();
        res.status(200).json(signUpdet);
    } catch (err) {
        res.status(500).send({ message: "Error Fetching Data", error: err.message });
    }
});
app.post('/updatedet', async (req, res) => {
    try {
        const updateRec = await Signup.findOneAndUpdate(
            { userName: "kaarthika1409" },  
            { $set: { userName: "kaarthika" } }, 
            { new: true } 
        );

        if (updateRec) {
            res.json("Record Updated");
        } else {
            res.status(404).json("Record Not Found");
        }
    } catch (err) {
        res.status(500).send({ message: "Error Updating Record", error: err.message });
    }
});
app.listen(3001, () => {
    console.log("Server Started on Port 3001");
});