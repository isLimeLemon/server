const router = require('express').Router()
const bcrypt = require('bcrypt')
const { createToken } = require('../jwt')

const {Users, ContacUser} = require('../../config/db');

router.post('/login', async(req, res) => {

    const { userName, password } = req.body

    const findUser = await Users.findOne({where:{userName}})

    if(findUser){
        const passwordMatch = await bcrypt.compare(password, findUser.password);
        if(passwordMatch){
            const where = {userId:findUser.id}
            const contactData = {
                address: await ContacUser.Address.findOne({where}),
                phone: await ContacUser.Phone.findOne({where}),
                email: await ContacUser.Emails.findOne({where})
            }
            
            const TOKEN = createToken({
                userId:findUser.id,
                role:findUser.role,
            })

            res.json({
                ...findUser.dataValues,
                ...contactData,
                TOKEN
            })

        }else{
            res.json({error:true,msg:"Password or user error"})
        }
    }else{
        res.json({error:true,msg:"Password or user error"})
    }


})

router.post('/register', async(req, res ) => {

const {userName,
    password,
    firstName,
    lastName,
    role, contactData} = req.body

/*
contactData {
    address: {country city streetName number postalCode}
    phone:{number}
    email:{email}
}
*/
const userData = {
    userName,
    password,
    firstName,
    lastName,
    role
}

console.log(req.body)

const encryptedPass = await bcrypt.hash(password.toString(), 10)

if(encryptedPass){

    const CreatedUser = await Users.create(
        {
            userName,
            password,
            firstName,
            lastName,
            role,
            password:encryptedPass,
            active:false,
            verified:false
        }
    )

   // const AddressCreated = await ContacUser.Address.create({...contactData.Address, userId:CreatedUser.id})
   // const PhoneCreated = await ContacUser.Phone.create({...contactData.phone, userId:CreatedUser.id})
    //const EmailCreated = await ContacUser.Emails.create({...contactData.email, userId:CreatedUser.id})

    if(CreatedUser/* && AddressCreated && PhoneCreated && EmailCreated*/){

        res.json({
            error:false,
            CreatedUser:{
                ...CreatedUser.dataValues,
                password:"******************"
            },
            /*
            AddressCreated,
            PhoneCreated,
            EmailCreated
            */
        })

    }else{
        res.json({error:true})
    }

}else{
    res.json({error:"error encrypting password"})
}


})

router.get('/verify-account', () => {

})

module.exports = router