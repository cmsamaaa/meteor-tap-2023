"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const householdRoutes = require('./routes/household');
require('dotenv').config();
const MONGODB_URI = process.env.MONGODB_URI;
const app = express();
/* Parsing the body of the request. */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res, next) => {
    res.send('Hello World!');
});
/* Telling the app to use the householdRoutes file for all requests that start with /household. */
app.use('/household', householdRoutes);
/* Connecting to the database and listening to port 3000. */
mongoose.connect(MONGODB_URI)
    .then((result) => {
    app.listen(3000);
})
    .catch((err) => {
    console.log(err);
});
