const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Signup = require('./models/signupSchema');
const Login = require('./models/loginSchema');
const bcrypt = require('bcrypt');
const cors=require('cors');
const jwt = require('jsonwebtoken');
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
const verifyToken = (req, res, next) => {
    console.log("middlaeware called");
    var token = req.headers.authorization;
    if(!token) res.send("Access Denied");
try{
   const user=jwt.verify(token,process.env.SECRET_KEY);
   console.log(user);
   req.user=user;
}
catch(err){
    console.log(err);
    res.send("Error in token");
}
    next();
}
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
app.get('/json', verifyToken,(req, res) => {
res.json({
    message: "This is the middleware",
    user: req.user})
})
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
app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await Signup.findOne({ email });
        //console.log(user)
        if (user) {
            const payload = {
                email: user.email
            }
            const token = jwt.sign(payload, process.env.SECRET_KEY,{expiresIn:'1h'});
            console.log(token);
            var isPasswordCorrect= await bcrypt.compare(password, user.password)
            // console.log(password,user.password);
            if (isPasswordCorrect) {
            await user.save();
            res.status(200).send("Login Successful",token=token);
        }
        else{
            res.status(200).send("Login Unsuccessful");
        }
        }
         else {
            res.status(401).send("User not found please signup!");
        }
    } catch (err) {
        res.status(500).send({message:"Error during login"});
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