const express = require("express");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
// Model
const UserModel = require("./model/UserModel");

const app = express();
const cors = require("cors");
app.use(cookieParser());
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hey Kanav");
});

// Register
app.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    console.log(username, email, "and", password);
    let user = await UserModel.findOne({ email });
    if (user) {
      return res
        .status(202)
        .json({ message: "User is already registered Please Login" });
    } else {
      let newuser = await UserModel.create({
        username,
        email,
        password,
      });

      let token = jwt.sign({ email }, "shiva");
      res.cookie("token", token);

      return res.status(200).json({ message: "Signup Successfully", token });
    }
  } catch (error) {
    console.log("Failed to Register", error);
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await UserModel.findOne({ email, password });
    if (!user) {
      return res.status(400).json({ message: "User Not Found" });
    } else {
      let token = jwt.sign({ email: email, userid: user._id }, "shiva");
      res.cookie("token", token);

      return res.json({ message: "Login Successfully", token, email });
    }
  } catch (error) {
    return res.status(404).json({ message: error });
  }
});





app.get("/message", (req, res) => {
  res.json({ message: "Hello from server!" });
});






app.listen(8080, () => {
  console.log(`Server is running on port 8080`);
});
