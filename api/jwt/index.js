const jwt = require('jsonwebtoken')

const ssw = process.env.SSWJWT

const createToken = (data) => {
    return jwt.sign({...data}, ssw, {expiresIn:60*60*24*7})
}

const decodeToken = (token) => {
    try{
        return jwt.verify(token, ssw)
    }catch(err){    
        return err
    }
}

module.exports = {
    createToken,
    decodeToken
}