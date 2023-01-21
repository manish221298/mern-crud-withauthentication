const bcryptjs = require('bcryptjs')
const jwt = require("jsonwebtoken")
const Register = require("../models/register")

const registerController = {}

registerController.create =async (req, res) => {
    const body = req.body

  const data = await  Register.findOne({email: body.email})

  console.log("bfhbdh", data)
    

    const register =  new Register(body)


    bcryptjs.genSalt()
    .then(salt => {
        bcryptjs.hash(body.password, salt)
        .then(encrypted => {
            register.password = encrypted
        })
    })

    await register.save()

    res.status(200).json("registered successfully")

}

registerController.login = async (req, res) => {
    const {email, password} = req.body

    const user = await Register.findOne({email: email})
    if(!user) return res.json("invalid email or password")
    const isMatch = bcryptjs.compare(password, user.password)
    if(!isMatch){
        return res.json("invalid user")
    }
    else{
        userToken = {
            _id: user._id,
            email: user.email,
            password: user.password
        }

        const token = await jwt.sign(userToken, 'manish123', {expiresIn: "10h"})
        res.json({
            token: token,
            id: userToken._id,
            email: userToken.email
        })
    }


    
}

module.exports = registerController