var mongoose = require("mongoose")
var articleSchema = mongoose.Schema({
    title: String,
    url: String,
    summary: String
})

module.exports = mongoose.model("Article", articleSchema)