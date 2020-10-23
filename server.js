// Dependencies and Constants
const express = require("express");
const fs = require("fs");

const app = express();

// Port
const PORT = process.env.PORT || 3002;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const notes = JSON.parse(fs.readFileSync("./db/db.json", 'utf-8'))

// Routes
require('./public/routes/apiRoutes')(app, notes)
require('./public/routes/htmlRoutes')(app)


// Making the server listen
app.listen(PORT, function() {
    console.log("App listening on PORT, http://localhost:" + PORT);
  });