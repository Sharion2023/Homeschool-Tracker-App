const express = require("express"); //import Express
const cors = require("cors"); //import cors to handle frontend requests

const app = express(); //my app server

app.use(cors()); //lets frontend fetch data without a “blocked by CORS” error
app.use(express.json()); //reads my json data objects

app.get("/", (req, res) => {
  res.send("Backend is working!");
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
