const Sequelize = require('sequelize')

//environment data
const dbName = process.env.DB_NAME
const userName = process.env.USER_DB
const dbPass = process.env.DB_PASS
const host = process.env.DB_HOST

//models
const SaleModel = require('../models/sale')
const ProductSaleModel = require('../models/product-sale')
const CategoriesModel = require('../models/categories')
const ProductsModel = require('../models/products')
const UserModel = require('../models/users')
const { AddressModel, EmailModel, PhoneModel } = require('../models/contact')

const sequelize = new Sequelize(dbName,userName,dbPass, {
    host,
    dialect:'mysql'
})


const Users = UserModel(sequelize);
const Categories = CategoriesModel(sequelize, Users);
const ContacUser = {
    Address:AddressModel(sequelize,Users),
    Emails:EmailModel(sequelize, Users),
    Phone:PhoneModel(sequelize, Users)
}

const Products = ProductsModel(sequelize, Categories, Users);
const Sales = SaleModel(sequelize, Users)
const ProductSale = ProductSaleModel(sequelize, Sales, Products)

sequelize.sync({force:false}).then(()=>{//CUIDADO ACA ELIMINA LA TABLA SI EXISTIE 
    console.log("Data base ready")
})

module.exports = {
    Products,
    Categories,
    Users,
    ContacUser,
    Sales,
    ProductSale
}