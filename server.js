const express = require("express")
const exphbs = require("express-handlebars")
const app = express()
const bodyParser = require("body-parser")
const path = require("path")
const PORT = process.env.PORT || 3000
const mongoose = require("mongoose")
const cheerio = require('cheerio')
const request = require("request")
var Article = require("./models/articleModel")

mongoose.connect('mongodb://newuser123:newuser123@ds117701.mlab.com:17701/nyt_scraper')
// var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

app.use(express.static(path.join(__dirname, '/views')));
app.engine('handlebars', exphbs({defaultLayout: 'layout'}))
app.set('view engine', 'handlebars');
 
// app.get('/', function (req, res) {
//     res.render('index')
// })

app.get('/', function(req, res){
    Article.find({}).exec().then(function(data){
        res.render('index', {items: data})
    })
})




app.get('/scrape', function(req, res){
    request("https://www.nytimes.com/", function(err, response, html){
        const $ = cheerio.load(html)
        var array = []

        $(".story-heading").each(function(){
            var title = $(this).children("a").text()
            var url = $(this).children("a").attr("href")
            var summary = $(this).siblings("p").text()


            if (title && url && summary){
                array.push({title: title, url: url, summary: summary})
                var article = new Article({title: title, url: url, summary: summary})
                article.save()
            }

        })
        res.send(array)
    })
})

app.get('/all', function(req, res){
    Article.find({}).exec().then(function(doc){
        res.send(doc)
    })

})

app.get('/clear', function(req, res){
    Article.remove({}).exec().then(function(doc){
        res.send(doc)
    })

})

app.listen(PORT, function(){
    console.log("Server listening on https://localhost:" + PORT)
});