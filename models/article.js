var mongoose = require("mongoose")
var articleSchema = mongoose.Schema({
    title: String,
    url: String,
    summary: String,
    imgUrl: String
})

const Article = module.exports = mongoose.model("Article", articleSchema)

