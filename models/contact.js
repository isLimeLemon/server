const { DataTypes } = require('sequelize')

const AddressModel = (sequelize, model) => {
    return sequelize.define('user_address', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userId:{
            type: DataTypes.INTEGER,
            references:{
                model,
                key:'id'
            }
        },
        country:{
            type: DataTypes.STRING
        },
        city:{
            type: DataTypes.STRING
        },
        streetName:{
            type: DataTypes.STRING
        },
        number:{
            type: DataTypes.INTEGER
        },
        postalCode:{
            type: DataTypes.STRING
        }
    })
}

const PhoneModel = (sequelize, model ) => {
    return sequelize.define('user_phones', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userId:{
            type: DataTypes.INTEGER,
            references:{
                model,
                key:'id'
            }
        },
        number:{
            type: DataTypes.STRING
        }
    })
}

const EmailModel = (sequelize, model ) => {
    return sequelize.define('user_emails', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userId:{
            type: DataTypes.INTEGER,
            references:{
                model,
                key:'id'
            }
        },
        email:{
            type: DataTypes.STRING
        }
    })
}



module.exports = {
    AddressModel,
    EmailModel,
    PhoneModel
}