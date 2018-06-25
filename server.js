var express = require("express")
var exphbs = require("express-handlebars")
var app = express()
var bodyParser = require("body-parser")
var path = require("path")
var PORT = 3000

app.use(express.static(path.join(__dirname, '/views')));
app.engine('handlebars', exphbs({defaultLayout: 'layout'}));
app.set('view engine', 'handlebars');
 
app.get('/', function (req, res) {
    res.render('index');
});


// const cheerio = require('cheerio')
// const $ = cheerio.load()

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/my_database');

// var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// mongoose.Promise = Promise;
// mongoose.connect(MONGODB_URI)



app.listen(PORT, function(){
    console.log("Server listening on https://localhost:" + PORT)
});