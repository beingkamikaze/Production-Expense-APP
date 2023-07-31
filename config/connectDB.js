const mongoose = require('mongoose');
const colors= require('colors');
const connectDB= async() =>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`Server Running on ${mongoose.connection.host}`.bgCyan.white);
    } catch (error) {
        console.log(`${error}`.bgRed)
        
    }
}
module.exports=connectDB