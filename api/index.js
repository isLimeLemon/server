const router = require('express').Router()

const productsRouter = require('./routes/products')

router.use('/products', productsRouter)

module.exports = router