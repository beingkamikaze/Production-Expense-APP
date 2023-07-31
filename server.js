const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const colors = require('colors');
const path = require('path');
const connectDB = require('./config/connectDB');
//config dotenv file
dotenv.config();

//database call
connectDB();
//rest objects
const app= express();

//middlewares
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

//routes
//user Routes
app.use('/api/v1/users',require('./routes/userRoutes'))
//transection Routes
app.use('/api/v1/transections',require('./routes/transectionRoutes'))

//static file
app.use(express.static(path.join(__dirname,'./client/build')));

app.get('*',function(req,res){
    res.sendFile(path.join(__dirname,'./client/build/index.html'));
})
//port
const PORT=8080 || process.env.PORT

//listen server
app.listen(PORT,()=>{
    console.log(`Server Rrunning on port ${PORT}`)
})