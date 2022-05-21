const router = require('express').Router()

const { Products } = require('../../config/db')
const { decodeToken } = require('../jwt')

//middlewares
const { newProductMiddleware } = require('../middlewares/products')

router.get('/', async(req, res) => {
    //res.send("<h1>PRODUCTOS</h1>")
    const { userId } = decodeToken(req.query.TOKEN)
    //console.log(dataToken)
    const products = await Products.findAll({where:{userId}})// SELECT * FROM 'products' WHERE userId == 2

    res.json(products)
})

router.post('/new', newProductMiddleware ,async(req, res) => {

    const { userId } = decodeToken(req.query.TOKEN)
    const { title, price, units, code, catId } = req.body

    const newProduct = await Products.create({
        userId,
        title,
        price,
        units,
        catId,
        code:userId+"-"+code
    })
    res.json(newProduct)

})

//TO DO:
//create route to sell a N products

module.exports = router