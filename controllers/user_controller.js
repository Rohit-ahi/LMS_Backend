

const User = require('../models/user_model')
const bcrypt = require('bcrypt')
const generate_token = require('../utils/genarate_token')


const user_reg = async(req,res)=>{
    try {
        const{name,email,password}  = req.body
        if(!name || !email || !password) {
              return res.status(400).json({success : false , msg :"All fields are required"})
        }
        const user = await User.findOne({email})
        if(user) {
             return res.status(400).json({success : false , msg :"User Already exits with email"})
        }
        const hashpassword = await bcrypt.hash(password,10)
        await User.create({
            name , email , password : hashpassword
        })

        res.status(201).json({success : true , msg : "Account craeted successfully"})
    } catch (error) {
        console.log('error',error)
        return res.status(500).json({success : false , msg : "Failed to register"})
    }

}

const user_login = async(req,res)=>{
        try {
            const{email,password} = req.body
            const user = await User.findOne({email})
            if(!user) {
                return res.status(400).json({success : false,msg :"Incorrect Email or Password"})
            }
            const ispassword_match = await bcrypt.compare(password,user.password)
            if(!ispassword_match) {
                return res.status(400).json({success : false,msg :"Incorrect Email or Password"})
            }
            generate_token(res ,user,`Welcome back ${user.name}`)

        } catch (error) {
            console.log('error',error)
            return res.status(500).json({success :false,msg:'failed to login'})
        }
}


module.exports = {user_reg,user_login}

