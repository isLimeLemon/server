const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {

    return sequelize.define('users', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userName:{
            type: DataTypes.STRING,
            unique:true
        },
        password:{
            type: DataTypes.STRING
        },
        firstName:{
            type: DataTypes.STRING
        },
        lastName:{
            type: DataTypes.STRING
        },
        role:{
            type: DataTypes.STRING
        },
        verified:{
            type: DataTypes.BOOLEAN
        },
        active:{
            type: DataTypes.BOOLEAN
        }
    })

}