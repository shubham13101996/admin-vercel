const express = require("express");
const connectDB = require("./db");
const sls = require('serverless-http')

const dotenv = require("dotenv");
dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.get("/defaulter/:id", (req, res) => {
 const {id} = req.params;
});

connectDB();
app.listen(8080, () => {
  console.log("Example app listening on port 3000!");
});


module.exports.server = sls(app)