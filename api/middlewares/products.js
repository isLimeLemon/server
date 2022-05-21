
const newProductMiddleware = (req, res, next) => {

    const { title, price, units, code, catId  } = req.body

    let errors = []

    if(title == null){
        errors.push("title is required")
    }
    if(price == null){
        errors.push("price is required")
    }
    if(units == null){
        errors.push("units is required")
    }
    if(code == null){
        errors.push("code is required")
    }
    if(catId == null){
        errors.push("category is required")
    }

    if(errors.length > 0){
        res.json({error:true,errors})
    }else{
        next()
    }

} 

module.exports = { 
    newProductMiddleware 
}