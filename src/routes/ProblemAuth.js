const express=require('express');
const probRouter=express.Router();
const adminMiddleware=require('../middleware/adminMiddle');
const CreateProblem=require('../controllers/problemAuthent')
// const userMiddleware=require('../middleware/userMiddle')
// //create,update,delete

probRouter.post("/create",adminMiddleware,CreateProblem);
// probRouter.put("/:id",adminMiddleware,updateProblem);
// probRouter.delete("/:id",adminMiddleware, deleteProblem);


// probRouter.get("/:id",userMiddleware,getProblemById);
// probRouter.get("/",userMiddleware,getAllProblem);
// probRouter.get("/user",userMiddleware,solvedAllProblem);





module.exports=probRouter;