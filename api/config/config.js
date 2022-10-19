const mongoose=require('mongoose')

const connect=()=>{
    try{
       mongoose.connect(process.env.MONGO_URI,()=>{
            console.log(`connected to database ${process.env.PORT}`)
        })
    }catch(error){
        console.log(error,`Mongo db connection error`);
    }
}

mongoose.connection.on('disconnected',()=>{
    console.log('mongo db connection failed')
})

mongoose.connection.on('connected',()=>{
    console.log('Mongo db connection successfull')
})

module.exports=connect