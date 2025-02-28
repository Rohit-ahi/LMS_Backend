// aPCGlLUI84RpwdwP - user password

require('dotenv').config()
const express = require('express')
const cnnDb = require('./database/db')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const user_router = require('./routers/user_router')

cnnDb()
const server = express()
                            //default madelware
server.use(express.json())
server.use(cookieParser())
server.use(cors({
     origin : 'http://localhost:5173',
     credentials:true
}))

server.use('/api/user',user_router)

const port = process.env.PORT || 8080
server.listen(port ,()=>{
      console.log(`https://localhost:${port}`)
})



