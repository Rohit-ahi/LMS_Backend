
const mongoose = require('mongoose')

const connect_db = async()=>{
     try {
            await mongoose.connect(process.env.MONGO_URI)
            console.log('connect db')
     } catch (error) {
          console.log('error occured' ,error)
     }
}


module.exports = connect_db

