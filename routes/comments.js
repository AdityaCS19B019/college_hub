const express = require('express')
const comments = require('../models/comment')
const mongoose = require('mongoose')
const router = express.Router()

router.post('/addcomment' , async(req,res)=>{
    // var postid = mongoose.Types.ObjectId(req.body.postid)
    // console.log(req.body.postid)
    try{
        newcomment = comments({
            commentdesc : req.body.commentdesc,
            commentowner : req.body.commentowner,
            ownerprofile : req.body.ownerprofile,
            postid       : mongoose.Types.ObjectId(req.body.postid)
        })
        newcomment = await newcomment.save()
        res.status(200).json({
            msg : "Comment added",
            success : true
        })
    }catch(e){
        console.log(e)
        res.status(400).json({
            success : "false",
            msg : "error try again"
        })
    }
})

router.get('/getcooments' , async (req,res)=>{
    try{
        data = await comments.find({postid : mongoose.Types.ObjectId(req.body.postid)})
        res.status(200).json({
            "msg" : "retrieved",
            "success" : true
        })
    }catch(e){
        res.status(400).json({
            "msg" : "error while retreiving",
            "success" : true
        })
    }
})

module.exports = router