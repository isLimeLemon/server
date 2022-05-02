const Sequelize = require('sequelize')

//models
const ProductsModel = require('../models/products')

const dbName = process.env.DB_NAME
const userName = process.env.USER_DB
const dbPass = process.env.DB_PASS
const host = process.env.DB_HOST

console.log(dbName,userName,dbPass,host)

const sequelize = new Sequelize(dbName,userName,dbPass, {
    host,
    dialect:'mysql'
})

const Products = ProductsModel(sequelize);

sequelize.sync({force:false}).then(()=>{
    console.log("Created tables")
})

module.exports = {
    Products
}