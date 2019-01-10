var express = require("express");

var router = express.Router();

var db = require("../models");

router.get("/", function (req, res) {
    db.Burger.findAll({}).then(burgers => {
        console.log(burgers);
        res.render("index", { burgers : burgers });
    })
})

router.post("/api/newBurger", function (req, res) {
    db.Burger.create(req.body)
        .then(()=>res.end())
        .catch(err=>console.log(err));
})

router.put("/api/devour/:id", function (req, res) {
    db.Burger.update(req.body, { where : {
        id : req.params.id
    }})
        .then(()=> res.end())
        .catch(err=>res.json(err))
})

module.exports = router;