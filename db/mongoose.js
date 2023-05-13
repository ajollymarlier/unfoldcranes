"use strict"
const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://ajollymarlier:YSuQl7XQqksg7Ee8@cluster0.e6gqhvv.mongodb.net/'
mongoose.connect(process.env.MONGODB_URI || mongoURI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})

module.exports = { mongoose }