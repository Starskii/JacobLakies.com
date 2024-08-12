require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

const contactRoute = require('./routes/contactRoute');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use("/api/", contactRoute);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "../client/build")));

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port, console.log(`Server listening to port ${port}`));
