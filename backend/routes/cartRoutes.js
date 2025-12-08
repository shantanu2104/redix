import express from "express";
import authMiddleware from "../middleware/authMiddleware.js"

const router =express.Router();

router.post("/add",authMiddleware,async(req,res)=>{
    const user=req.user;

    res.json({
        success:true,
        message: "Item added to cart",
        addedBy: user.name,
    });
});

router.put("/udate/:id",authMiddleware,async(req,res)=>{
    res.json({success:true,message: "Cart updated "});
})

export default router ;