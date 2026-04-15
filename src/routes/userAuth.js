const express=require('express');
const authRouter = express.Router();
const userMiddleware=require('../middleware/userMiddle')
const adminMiddleware=require('../middleware/adminMiddle')
const {register,login,logout,adminRegister}=require('../controllers/userAuthent')

authRouter.post('/register', register);
authRouter.post('/login',login);
authRouter.post('/logout',userMiddleware,logout);
authRouter.post('/admin/register',adminMiddleware,adminRegister);

module.exports=authRouter;