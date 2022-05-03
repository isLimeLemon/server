const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {

    return sequelize.define('products', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title:{
            type: DataTypes.STRING
        },
        price:{
            type: DataTypes.FLOAT
        },
        units:{
            type: DataTypes.INTEGER
        },
        catId:{
            type:DataTypes.INTEGER
        }
    })

}