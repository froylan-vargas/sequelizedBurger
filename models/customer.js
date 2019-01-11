module.exports = function(sequelize,DataTypes){
    var Customer = sequelize.define("Customer",{
        name : {
            type : DataTypes.STRING,
            allowNull : false,
            validate : {
                len : [1,50]
            }
        }
    });

    Customer.associate = function (models) {
        models.Customer.hasMany(models.Burger, {
           
        });
    }

    return Customer;
}