const { decodeToken } = require('../jwt')

const checkToken = (req, res, next) => {
    //console.log(req)
    const { TOKEN } = req.query

    const tokenData = decodeToken(TOKEN)

    if(tokenData?.userId != null){
        next()
    }else{
        res.json(tokenData)
    }

}

module.exports = {
    checkToken
}