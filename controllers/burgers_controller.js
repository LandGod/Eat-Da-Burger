// Dependencies 
var express = require('express');
var router = express.Router();
var Burger = require('../models/burger');


// Render the index page when users ask for website root directory
// Make two queries to the database and wait for both returns before rendering it to index
router.get("/", function (req, res) {
    Promise.all([Burger.getUneaten(), Burger.getEaten()]).then(function (results) {
        res.render("index", { unEatenBurgers: results[0], eatenBurgers: results[1] });
    }).catch((err) => {
        console.log(err);
    });

});

router.post("/api/burgers", function (req, res) {
    Burger.commitBurger(req.body.newBurger).then(function(results) {
        res.json(results);
    }).catch((err) => {
        console.log(err);
    })
});

router.put("/api/burgers", function (req, res) {
    Burger.eatBurger(req.body.burgerID).then(function(results) {
        res.json(results);
        console.log('Finished PUT')
    }).catch((err) => {
        console.log(err);
    })
});

module.exports = router;