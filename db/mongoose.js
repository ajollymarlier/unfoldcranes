"use strict"
const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/CovidCranesAPI'
mongoose.connect(process.env.MONGODB_URI || mongoURI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})

module.exports = { mongoose }