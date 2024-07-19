const express = require("express");
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

app.post("/register", async (req, res) => {
  try {
    const data = req.body;
    const username = data.username;
    const email = data.email;
    const password = data.password;
    let user = await UserModel.create({
      username,
      email,
      password,
    });
    let token = jwt.sign({ email }, "shiva");
    res.cookie("token", token);
  } catch (error) {
    console.log("Failed to Register", error);
  }
});

app.post("/login", async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
});
app.get("/message", (req, res) => {
  res.json({ message: "Hello from server!" });
});






app.listen(8080, () => {
  console.log(`Server is running on port 8080`);
});
