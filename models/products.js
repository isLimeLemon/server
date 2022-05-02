const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {

    return sequelize.define('products', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre:{
            type: DataTypes.STRING
        },
        precio:{
            type: DataTypes.FLOAT
        },
        unidades:{
            type: DataTypes.INTEGER
        }
    })

}