const router = require('express').Router()

const { Products } = require('../../config/db')

//middlewares
const { newProductMiddleware } = require('../middlewares/products')

router.get('/', async(req, res) => {
    //res.send("<h1>PRODUCTOS</h1>")
    const products = await Products.findAll()

    res.json(products)
})

router.post('/new', newProductMiddleware ,async(req, res) => {

    const newProduct = await Products.create(req.body)
    res.json(newProduct)

})

module.exports = router