const express=require('express');
const app=express();
require('dotenv').config();

const main=require('./config/db')
const cookieParser=require('cookie-parser');
const redisclient = require("./config/redis");
const authRouter = require('./routes/userAuth');
const problemRouter= require('./routes/ProblemAuth')

app.use(express.json());
app.use(cookieParser());
app.use('/user',authRouter); //day3
app.use('/problem',problemRouter);


// main()
// .then( async ()=>{
//     app.listen(process.env.PORT,()=>{
//         console.log("Server listening at port number: "+process.env.PORT)
//     })
// })
// .catch(err=>console.log('ERROR OCCURRED: '+err));
const InitializeConnection =async ()=>{
  try{
    await Promise.all([main(),redisclient.connect()]);
    console.log("DB Connected")
    app.listen(process.env.PORT,()=>{
    console.log("Listening at port Number: "+ process.env.PORT)
})  

  }
  catch(err){
   console.log("Error: "+ err);
  }
}

InitializeConnection();