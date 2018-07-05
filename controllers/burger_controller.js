// Requiring our models
var db = require("../models");
var express = require("express");
var router = express.Router();


// end of common functions
// All routers
router.get("/", function(req, res){
    console.log("Calling get ");
    db.Burger.findAll({})
        .then(function (dbBurger) {
            var hbsObject = {
                 burgers : dbBurger
            };
            res.render("index", hbsObject);            
        });
}); //end of router.get

//Add a new Burger to burger table
router.post("/api/burger", function(req, res){
    db.Burger.create({
        burger_name: req.body.name,
        devoured: false
    }).then(function(dbBurger){
        res.json({id: dbBurger.insertId});
    })
}); //end of router.post

//Update Devoured for burger that is already eaten by the user
router.put("/api/burger/:id", function(req, res) {
    console.log("###############" + req.params.id);
    db.Burger.update(
        {devoured: req.body.devoured},
        {where:
             { id: parseInt(req.params.id)}
        })
    .then(function(result) {
    if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
        } else {
        res.status(200).end();
        }

    });
}); // end of router.put


// Export routes for server.js to use.
module.exports = router;
