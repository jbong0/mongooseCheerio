var express = require("express")
var exphbs = require("express-handlebars")
var app = express()
var bodyParser = require("body-parser")

const cheerio = require('cheerio')
const $ = cheerio.load()

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my_database');

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI)