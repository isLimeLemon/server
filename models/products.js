const { DataTypes } = require('sequelize')

module.exports = (sequelize, catModel, userModel) => {

    return sequelize.define('products', {
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
        code:{
            type: DataTypes.STRING,
            unique:true
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
            type:DataTypes.INTEGER,
            references:{
                model:catModel,
                key:'id'
            }
        }
    })

}