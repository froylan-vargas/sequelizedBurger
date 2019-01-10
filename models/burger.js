module.exports = function (sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {

        burgerName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    });
    return Burger;
};





