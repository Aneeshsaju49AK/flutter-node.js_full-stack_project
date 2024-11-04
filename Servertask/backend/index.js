const express = require("express");
const mongoose = require("mongoose");
const app = express();

// Connect to MongoDB
mongoose.connect("mongodb://localhost/ourdata");
mongoose.Promise = global.Promise;

// Middleware to parse JSON
app.use(express.json());

// Use the routes defined in api.js
app.use('/api', require('./routes/api'));

// Error-handling middleware
app.use(function (err, req, res, next) {
  res.status(422).send({ error: err.message });
});

// Define the port and start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Successfully connected to port " + port);
});
