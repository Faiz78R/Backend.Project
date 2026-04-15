const {getLanguageById,submitBatch,submitToken}=require('../utils/problemutils')
const Problem= require('../models/problem')

const CreateProblem =async (req,res)=>{
    const{title,description,difficult,
     tags, visibleTestCases, StartCode,
      referenceSolution,problemCreator 
    }=req.body;
    //db mein send karne se pehle check karo sahoi hai ki nhi JudegeO use karo
    try{
       for(const {language,completeCode} of referenceSolution){
        
        const languageId=getLanguageById(language); //utils ke anadar jao language define karo
        
        //submissions array create karo batch mein
        
        const submissions= visibleTestCases.map((testcase)=>({

            source_code:completeCode,
            language_id:languageId,
            stdin:testcase.input,
            expected_output:testcase.output

        }));
        console.log("visibleTestCases: ",visibleTestCases);
        console.log("Submission to be sent: ",submissions);

         const submitResult=await submitBatch(submissions)  //utils ke andar submitResult banao  
        // token of array return karta hai

        const resultToken= submitResult.map((value)=> value.token);// array of token craete hoga

        const testResult= await submitToken(resultToken); //utils ke anadar submit token banao

        for(const test of testResult){
            if(test.status_id!=3){
              return  res.status(400).send("Error Occurred")
            }
        }
       }

       // we can store in our DB
       const userProblem=await Problem.create({
        ...req.body,
        problemCreator:req.result._id
       })
       res.status(201).send("Problem Saved Successfully")
    }
    catch(err){
       res.status(400).send("Error: "+err);
    }
}


module.exports= CreateProblem;