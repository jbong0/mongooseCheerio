// Dependencies
const express = require("express")
      router = express.Router()
      cheerio = require("cheerio")

// Scrape Articles
router.get('/scrape', function(req, res){
    request('https://www.nytimes.com/', function(err, response, html){
        const $ = cheerio.load(html)
        let array = []

        // Gets Article Info
        $('.story-heading').each(function(){
            let title = $(this).children('a').text()
                url = $(this).children('a').attr('href')
                summary = $(this).siblings('p').text()
                imgUrl = "Figure out how to get URL"

            // Saves Article Info
            if (title && url && summary && imgUrl){
                array.push({title: title, url: url, summary: summary})
                let article = new Article({title: title, url: url, summary: summary, imgUrl: imgUrl})
                article.save()
            }
        })
        res.send(array)
    })
})


module.exports = router






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


