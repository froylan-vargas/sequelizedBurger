var db = require("../models");

module.exports = function(app){
    app.post("/api/newBurger", function (req, res) {
        db.Burger.create(req.body)
            .then(()=>res.end())
            .catch(err=>console.log(err));
    })
    
    app.put("/api/devour/:id", function (req, res) {
        db.Burger.update(req.body, { where : {
            id : req.params.id
        }})
            .then(()=> res.end())
            .catch(err=>res.json(err))
    })    
}