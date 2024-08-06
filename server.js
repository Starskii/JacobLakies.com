require("dotenv").config;
const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

// Creating the middleware 
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5000;
app.listen(port, console.log(`Server listening to port 5000`));