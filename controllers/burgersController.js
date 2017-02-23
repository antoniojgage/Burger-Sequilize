var db = require("../models");
var express = require("express");
var router = express.Router();

// express callback response by calling burger.selectAllBurger
router.get("/", function(req, res) {
    db.Burger.findAll().then(function(dbPost) {
        var hbsObject = {
            burgers: dbPost
        };
        res.render("index", hbsObject);
    });
});
// post route -> back to index
router.post("/", function(req, res) {
    db.Burger.create(req.body).then(function(dbPost) {
        res.redirect("/");
    });
});
// put route -> back to index
router.put("/:id", function(req, res) {
    db.Burger.update(
        req.body, {
            where: {
                id: req.params.id
            }
        }).then(function(dbPost) {
        res.redirect("/");
    });
});
//make router avaliable
module.exports = router;
