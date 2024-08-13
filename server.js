require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

const contactRoute = require('./routes/contactRoute');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use("/", contactRoute);

if (process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"))
    app.get("*", (req, res) => (
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    ));
}

const port = process.env.PORT || 3000;
app.listen(port, console.log(`Server listening to port ${port}`));

module.exports = app;
