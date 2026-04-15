const User=require('../models/user'); //pehele user schema chahiye
const validate=require('../utils/validator')
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken');
const authRouter=require('../routes/userAuth')

const register=async(req,res)=>{
    try{
        //validate
      validate(req.body);
      const{firstName,emailId,password}= req.body;
      
    //hash password
    req.body.password= await bcrypt.hash(password,10);
    req.body.role='user'; //day3
     const user= await User.create(req.body);
     //send token
       const token= jwt.sign({_id:user._id,emailaid:emailId,role:'user'},process.env.JWT_KEY,{expiresIn:60*60});
      res.cookie('token',token,{maxAge: 60*60*1000})
      res.status(201).send.("User Registerd Successfully");

    }
    catch(err){
        res.status(400).send("Error: "+err)
    }
}
const login=async(req,res)=>{
    try{
       const {emailId,password}=req.body;
       if(!emailId)
        throw new Error("Invalid Credentials");
    if(!password)
        throw new Error("Invalid Credentials");
     const user=  await User.findOne({emailId});
     const match= await bcrypt.compare(password,user.password);

     if(!match)
        throw new Error("Inavalid Credentials")
      //send token
       const token= jwt.sign({id:user._id,emailaid:emailId, role:user.role},process.env.JWT_KEY,{expiresIn:60*60});
      res.cookie('token',token,{maxAge: 60*60*1000})
      res.status(200).send("Logged In Successfully");   

    }
    catch(err){
        res.status(201).send('Error: '+err)
    }
}
 
const logout= async(req,res)=>{
    try{
 //validate the token ...middlewarebana
       const {token}=req.cookies;
     

       const payload=jwt.decode(token);
       await redisclient.set(`token:${token}`,`Blocked`);
       await redisclient.expireAt(`token:${token}`,payload.exp);
       res.cookie("token",null,{expires:new Date(Date.now())});
       res.send("LogOut Successfully")
       //add the token to redis blocklist
       //cookies ko clear karde...
    }
    catch(err){
            res.status(401).send("Error: "+err);
    }
     
}

const adminRegister=async(req,res)=>{
    try{
    
        //validate
      validate(req.body);
      
      const {firstName,emailId,password}=req.body;
      if(!req.body)
        throw new Error("body is missing")
    //hash password
    req.body.password= await bcrypt.hash(password,10);

     const user= await User.create(req.body);
    
     //send token
       const token= jwt.sign({_id:user._id,emailaid:emailId,role:user.role},process.env.JWT_KEY,{expiresIn:60*60});
       
      res.cookie('token',token,{maxAge: 60*60*1000})
      
      res.status(201).send("User Registerd Successfully");

    }
    catch(err){
        res.status(400).send("Error: "+err)
    }
}



module.exports={register,login,logout,adminRegister}