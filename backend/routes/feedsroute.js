
const express=require('express');
const router=express.Router();
const {createfeed,getFeed}=require('../controllers/feedscontroll');
const validatetoken = require('../middlewares/validatetoke');
router.route('/send').post(validatetoken,createfeed);
router.route('/retrieve/:token').get(validatetoken,getFeed)
module.exports=router;