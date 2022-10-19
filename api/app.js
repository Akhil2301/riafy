const express=require('express')
const bodyparser=require('body-parser')
const cors=require('cors')
const morgan=require('morgan')
require('dotenv').config()
const connect=require('./config/config')
const mainRoute=require('./router/mainRoute')


const app=express()


//middleware parses

app.use(express.json());
app.use(express.urlencoded({limit: "50mb", extended: false}));
app.use(bodyparser.json())
app.use(morgan('dev'))
app.use(cors())


connect()
app.use('/',mainRoute)

const port=process.env.PORT
app.listen(port,()=>{
    console.log(`connected on port number ${port}`)
})