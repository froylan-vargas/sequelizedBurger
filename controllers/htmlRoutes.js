var db = require("../models");

module.exports = function (app) {
    app.get("/", (req, res) => {
        db.Customer.findAll({}).then(customers => res.render("index", { customers }));

    })

    app.get("/getCustomerHamburgers/:id", (req, res) => {
        db.Burger.findAll({
            where:
            {
                CustomerId: req.params.id
            },
            include : [db.Customer]
        })
            .then(burgers => { 
                res.render("hamburgers", {
                burgers,
                currentAuthorId: req.params.id
            })
        });
    });
}