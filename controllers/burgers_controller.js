var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.getAll(function (data) {
        res.render("index", { burgers: data });
    })
})

router.post("/api/newBurger", function (req, res) {
    var burgerName = req.body.burgerName;
    burger.insertBurger(burgerName, function (result) {
        console.log(result);
        res.json({ id: result.insertId });
    });
})

router.put("/api/devour/", function (req, res) {
    console.log("Im here");
    var id = req.body.id;
    burger.updateBurger(id, true, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
})

module.exports = router;