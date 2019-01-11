module.exports = function (sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {

        burgerName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate : {
                len : [1,50]
            }
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    });

    Burger.associate = function (models) {
        models.Burger.belongsTo(models.Customer,{
            foreignKey: {
                allowNull : false
            },
            onDelete: "CASCADE",
            hooks: true
        })
    }

    return Burger;
};





