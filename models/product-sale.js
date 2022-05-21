const { DataTypes } = require('sequelize')

module.exports = (sequelize, saleModel, productModel) => {
    return sequelize.define('product-sale', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        saleId:{
            type: DataTypes.INTEGER,
            references:{
                model:saleModel,
                key:'id'
            }
        },
        productId:{
            type: DataTypes.INTEGER,
            references:{
                model:productModel,
                key:'id'
            }
        },
        productPrice:{
            type:DataTypes.STRING,
        },
    })
}