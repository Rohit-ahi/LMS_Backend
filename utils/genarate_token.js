

const jwt = require('jsonwebtoken')

const generate_token = (res,user,msg)=> {
       const token = jwt.sign({userid : user._id},process.env.SECRET_KEY ,{expiresIn:'1d'})
       res.status(200).cookie('token',token,{httpOnly : true,sameSite :"strict",maxAge:24*60*60*1000}).json({sucess:true,msg,user})
}

module.exports = generate_token  