const mongoose=require('mongoose')
const mongodb_url=process.env.MONGODB_URL;
const connectdb=async()=>{
    
    try
    {
        const c=await mongoose.connect(mongodb_url)
        console.log(c.connection.host,c.connection.name)
    }
    catch(e)
    {
        console.log(e)
    }

}
module.exports={connectdb}