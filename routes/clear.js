const express = require("express")
const db = require('../models');
router = express.Router(),


// Clear Function
router.get('/clear', function(req, res){
    db.Article
        .remove({})
        .exec()
        .then(function(doc){
        res.send(doc)
    })

})

module.exports = router