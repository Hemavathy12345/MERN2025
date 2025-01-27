const express = require("express");
const path = require("path");
const mdb = require("mongoose");
const dotenv = require("dotenv");
const Signup = require("./models/SignupSchema");
dotenv.config();
const app = express();
app.use(express.json());

mdb
  .connect("mongodb+srv://secemern2025:sece2025@mern2025.elvk4.mongodb.net/")
  .then(() => {
    console.log("MongoDB Connection Sucessfull");
  })
  .catch((err) => {
    console.log("MongoDB Connection Unsucessfull", err);
  });

app.get("/", (req, res) => {
  res.send(
    "Welcome to Backend my friend\n Your RollerCoster starts from now on\n Fasten your codabase so you can catchup of what is been taught"
  );
});
app.get("/static", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/signup", (req, res) => {
  var { firstName, lastName, username, email, password } = req.body;
  try {
console.log("Inside try");
      const newCustomer = new Signup({
      firstName: firstName,
      lastName: lastName,
      userName: userName,
      email: email,
      password: password,
    });
    newCustomer.save()
    res.status(201).send("signup successfull");
  } catch (err) {
    res.status(400).send("Signup Unsuccessfull",err);
  }
});
app.listen(3001, () => {
  console.log("Server Started");
});