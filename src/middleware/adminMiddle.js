const jwt=require("jsonwebtoken");
const User=require('../models/user')
const redisclient = require("../config/redis");

const adminMiddleware= async(req,res, next)=>{
    try{
        //token ko nikalo
        const {token}=req.cookies;
        if(!token)
            throw new Error("Token is not present");

       const payload= jwt.verify(token,process.env.JWT_KEY);

       const {id}= payload;
       if(!id)
        throw new Error("Id is missing")

      const result= await User.findById(id);
     
      if(!result)
        throw new Error("User Doesn't Exist");
      if(result.role!=='admin')
        throw new Error('invalid token');
    // Redis ke blocklist mein to present nhi hai // redis ka file banao config mein
    const IsBlocked= await redisclient.exists(`token:${token}`);

    if(IsBlocked)
        throw new Error("Invalid Token");

    req.result= result;
    
    next();



    }
    catch(err){
       res.status(503).send("ERROR: "+err)
    }
}

module.exports =adminMiddleware;
