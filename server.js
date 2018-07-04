// Dependencies
const express = require('express')
      mongoose = require('mongoose')
      exphbs = require('express-handlebars')
      bodyParser = require('body-parser')
      logger = require('morgan')
      path = require('path')
      cheerio = require('cheerio')
      request = require('request')



//Installize app
const app = express()

// Database Setup
var MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/mongoHeadlines';
mongoose.connect('mongodb://newuser123:newuser123@ds117701.mlab.com:17701/nyt_scraper')

//Static Directory
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, '/views')));

// Handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars');

//Morgan Middleware
app.use(logger('dev'))

//setting up body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Routes
const index = require('./routes/index')  
      articles = require('./routes/articles')
      notes = require('./routes/notes')
      scrape  = require('./routes/scrape')


app.use('/index', index)
app.use('/articles', articles)
app.use('/notes', notes)
app.use('/scrape', router)
app.use('/', router)



// Server
const PORT = process.env.PORT || 3000
app.listen(PORT, function(){
    console.log('Server listening on https://localhost:' + PORT)
});









// app.get('/', function(req, res){
//     Article.find({}).exec().then(function(data){
//         res.render('index', {items: data})
//     })
// })



// app.get('/all', function(req, res){
//     Article.find({}).exec().then(function(doc){
//         res.send(doc)
//     })

// })

// app.get('/clear', function(req, res){
//     Article.remove({}).exec().then(function(doc){
//         res.send(doc)
//     })

// })
