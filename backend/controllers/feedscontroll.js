
const asynchandler=require('express-async-handler')
const {Feed}=require('../models/Feedmodel');
const createfeed=asynchandler(async(req,res)=>{
    const {info,token}=req.body;
    const user_id=req.user.id;
    if(!info)
    {
        return res.status(200).json({msg:'enter a information'})
    }
    const data = await Feed.create({ user: user_id, info, token });
    res.status(200).json({msg:'sucess'})
})
const getFeed=asynchandler(async(req,res)=>{
    const token=req.params.token;
    if(!token)
    {
           return res.status(200).json({msg:'enter a  token'})
    }
    const data=await Feed.findOne({token:token})
    if(!data)
    {
        return res.status(200).json({msg:'enter a valid token'})
    }

    res.status(200).json({msg:'sucess',result:data.info})
})
module.exports={createfeed,getFeed}
