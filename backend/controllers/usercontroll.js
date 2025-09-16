
const asynchandler=require('express-async-handler');
const {User}=require('../models/usermodel');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const JWT_SECRET=process.env.JWT_SECRET;
const registeruser=asynchandler(async(req,res)=>{
     const {name,email,password}=req.body;
     if(!name || !email || !password)
     {
        return res.status(200).json({msg:'all fields must be required'})
     }
     const user=await User.findOne({email})
     if(user)
     {
        return  res.status(200).json({msg:'email already exists'})
     }
     const hashpassword=await bcrypt.hash(password,10);
     const data=await User.create({name,email,password:hashpassword});
     res.status(201).json({msg:'registration sucessfull'})
})
const loginuser=asynchandler(async(req,res)=>{
    const {email,password}=req.body;
    if( !email || !password)
    {
        return res.status(200).json({msg:'all fields must be required'})
    }
    const user=await User.findOne({email})
    if(!user)
    {
        return res.status(200).json({msg:'please create account'})
    }
    if(user && await bcrypt.compare(password,user.password))
    {
        const token = jwt.sign(
                            { user: { id: user.id } },  
                            JWT_SECRET,               
                            { expiresIn: '14d' }   
                            );
        return res.status(200).json({token})
    }
    else
    {
        return res.status(200).json({msg:'check password'})
    }
    
})
const getuser=async (req, res) => {
  const id = req.user.id; 
  const user = await User.findById(id);
  return res.status(200).json({msg:user.name})
}
module.exports={registeruser,loginuser,getuser};