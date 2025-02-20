// main backend file 

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/User");

const app = express();
app.use(express.json()); // used for data tranfer from frontend to backend
app.use(cors());

// now connection with the mongoose
mongoose.connect("mongodb://127.0.0.1:27017/user");

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Validate input
  if (!email || !password) {
    return res.status(400).json("Email and password are required.");
  }

  UserModel.findOne({ email: email })
    .then((user) => {
      if (user) {
        if (user.password === password) {
          res.json("Success");
        } else {
          res.status(401).json("The password is incorrect.");
        }
      } else {
        res.status(404).json("No user found with this email.");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json("Internal server error.");
    });
});

// axios local host in signup form
app.post("/register", (req, res) => {
  UserModel.create(req.body) // data is in this body
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("server is running.");
});
