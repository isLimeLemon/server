const { DataTypes } = require('sequelize')

module.exports = (sequelize, userModel) => {

    return sequelize.define('categories', {
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
        name:{
            type:DataTypes.STRING,
            unique:true
        }
    })

}