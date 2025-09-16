
const mongoose=require('mongoose');
const { User } = require('./usermodel');

const feedmodel=mongoose.Schema(
    {
       user:
        {
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"User"

        },
        info:
        {
            type:String,
            required:true
        },
        token:
        {
            type:String,
            required:true
        }
    }
)
const Feed=mongoose.model('Feed',feedmodel);
module.exports={Feed}