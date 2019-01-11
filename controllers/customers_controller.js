var db = require("../models");

module.exports = app => {
    app.get("/api/getCustomers", (req, res) => {
        db.Customer.findAll({})
            .then(customers => {
                res.json(customers)
            })
    })

    app.post("/api/addCustomer", (req,res) => {
        db.Customer.create(req.body)
            .then(()=>res.end())
            .catch(err=>res.json(err))
    })

    app.delete("/api/deleteCustomer/:id", (req,res)=>{
        db.Customer.destroy({
            where : {
                id : req.params.id
            }
        }).then(()=> res.end())
    })
}