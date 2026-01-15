
const express=require('express');
const app=express();
require('dotenv').config()
const {connectdb}=require('./connectDB/mongodb')
const cors=require('cors');
//to retrieve data
app.use(express.json());
//cors
app.use(cors({
       origin:'https://infoeasy-info.vercel.app',
       credentials:true
    }))
//to get port number
const port=process.env.PORT;
//connect to database
connectdb()
//routes
app.use('/',require('./routes/usersroute.js'))
app.use('/',require('./routes/feedsroute.js'))
app.listen(port,()=>{
    console.log(`port is runnig at ${port}`)
})
