const express = require("express");
const cors = require("cors");
const { json } = require("body-parser");

const app = express();

app.use(cors());
app.use(json());

const port = 3001;

const controller = require("./controllers/control.js");

//CONNECTION TEST
// app.get("/api/test", (req, res, next) => { 
// 	res.json("Success"); 
// })

app.post("/api/getData", controller.getData);

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});
