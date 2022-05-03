
const newProductMiddleware = (req, res, next) => {

    const { body } = req

    if(body.title == null || body.price == null || body.units == null){
        res.json({error:'data error',body})
    }else{
        next()
    }

}

module.exports = { 
    newProductMiddleware 
}