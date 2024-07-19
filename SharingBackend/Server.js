const express = require("express");

const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hey Kanav");
});
app.get("/message", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(8080, () => {
  console.log(`Server is running on port 8080`);
});
