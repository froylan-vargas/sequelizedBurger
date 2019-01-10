var connection = require("./connection.js");

var orm = {
    selectAll: function(table,cb){
        var queryString = "SELECT * FROM ??";
        connection.query(queryString,[table], function(err,result){
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function(table, column, value, cb){
        var queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString,[table,column,value], function(err,result){
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function(table, filterColumn, filterValue, columnToChange, changeValue,cb){
        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        connection.query(queryString, [table, columnToChange, changeValue, filterColumn,filterValue],
            function(err,result){
                if (err) throw err;
                cb(result);
            });
    }
};

module.exports = orm;

