//dependencies
const express = require('express'),
      mongoose = require('mongoose'),
      exphbs = require('express-handlebars'),
      bodyParser = require('body-parser'),
      logger = require('morgan'),
      path = require('path'),
      favicon = require('serve-favicon');


//initializing the app
const app = express();

// installize MongoDB
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
mongoose.connect('mongodb://newuser123:newuser123@ds117701.mlab.com:17701/nyt_scraper')


//setting up Morgan middleware
app.use(logger('dev'));

//setting up body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//setting up handlebars middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//setting up the static directory
app.use(express.static(path.join(__dirname, 'public')));
app.use('/articles',express.static(path.join(__dirname, 'public')));
app.use('/notes',express.static(path.join(__dirname, 'public')));


//setting up routes
const index = require('./routes/index'),
      articles = require('./routes/articles'),
      notes = require('./routes/notes'),
      scrape = require('./routes/scrape')
      clear = require('./routes/clear');

app.use('/', index);
app.use('/articles', articles);
app.use('/notes', notes);
app.use('/scrape', scrape);
app.use('/clear', clear);

//starting server
const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log(`Listening on http://localhost:${PORT}`);
});
