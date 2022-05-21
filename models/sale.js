const { DataTypes } = require('sequelize')

module.exports = (sequelize, userModel) => {

    return sequelize.define('sale', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userId:{
            type: DataTypes.INTEGER,
            references:{
                model:userModel,
                key:'id'
            }
        },
        total:{
            type:DataTypes.STRING,
            unique:true
        },
        ticketUrl:{
            type: DataTypes.STRING,
            unique:true
        }
    })

}