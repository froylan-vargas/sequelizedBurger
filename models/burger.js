var orm = require("../config/orm.js");

var burger = {
    getAll: function(cb) {
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },

    insertBurger: function(burgerName,cb){
        orm.insertOne("burgers", "burger_name", burgerName, function(res){
            cb(res);
        });
    },

    updateBurger: function(filterValue,changeValue,cb){
        orm.updateOne("burgers","id",filterValue,"devoured",changeValue, function(res){
            cb(res);
        });
    }
}

module.exports = burger;