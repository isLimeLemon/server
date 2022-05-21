const router = require('express').Router()

const productsRouter = require('./routes/products')
const authRouter = require('./routes/auth')
const { checkToken } = require('./middlewares/token')

router.use('/products',checkToken, productsRouter)
router.use('/auth', authRouter)

module.exports = router