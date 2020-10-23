// Dependencies and Constants
const express = require("express");
const path = require("path");

const app = express();

// Port
const PORT = process.env.PORT || 3002;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes



// Making the server listen
app.listen(PORT, function() {
    console.log("App listening on PORT, http://localhost:" + PORT);
  });