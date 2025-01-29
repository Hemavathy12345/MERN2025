const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Signup = require('./models/signupSchema');
const Login = require('./models/loginSchema');
const bcrypt = require('bcrypt');
const cors=require('cors');
const app = express();
dotenv.config();
app.use(cors())
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
    var hashedpassword= await bcrypt.hash(password, 10);
    // console.log(hashedpassword);
    try {
        const newSignup = new Signup({
            firstName:firstName,
            lastName:lastName,
            userName:userName,
           email: email,
           password: hashedpassword
        });

        await newSignup.save();
        res.status(201).send("SignUp Successful");
    } catch (err) {
        res.status(400).send({ message: "SignUp Unsuccessful", error: err.message });
    }
});
app.post('/login', async (req, res) => {
    const { userName, password } = req.body;
    var hashedpassword= await bcrypt.hash(password, 10);

    try {
        const newLogin = new Login({
           userName: userName,
           password: hashedpassword
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
app.post('/deletedet', async (req, res) => {
    try {
        const deleteRec = await Signup.findOneAndDelete(
            { userName: "kaarthika" },  
            { new: true } 
        );

        if (deleteRec) {
            res.json("Record Deleted");
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