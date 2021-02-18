"use strict"
const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://ajollymarlier:sMdd51YxB0JhqMGR@covidcranescluster.6jxt3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(process.env.MONGODB_URI || mongoURI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})

module.exports = { mongoose }