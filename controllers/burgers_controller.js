// Dependencies 
var express = require('express');
var router = express.Router();


// Serve index.handlebars to the root route, populated with all quote data.
router.get("/", function(req, res) {
    connection.query(/*TODO: QUERY GOES HERE */, function(err, data) {
      if (err) {
        return res.status(500).end();
      }
  
      res.render("index", { /* TODO: Handlebars data */ });
    });
  });

module.exports = router;