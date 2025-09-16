
const express=require('express');
const router=express.Router();
const {registeruser,loginuser,getuser}=require('../controllers/usercontroll');
const validatetoken = require('../middlewares/validatetoke');
router.route('/register').post(registeruser);
router.route('/login').post(loginuser)
/*router.route('/user').get(validatetoken, async (req, res) => {
  const user = req.user; 
  res.status(200).json({ user });
});*/
router.route('/user').get(validatetoken,getuser)
module.exports=router;