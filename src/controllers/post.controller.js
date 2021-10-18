const express = require("express");

const Post = require("../models/posts.model")

const authenticate = require("../middlewares/authenticate")

const router = express.Router();

router.get("/new",(req,res)=>{
    return res.render("posts/new")
})

router.get("/", authenticate,async function(req,res){
    const posts = await Post.find().lean().exec();
    const user = req.user;
    return res.status(200).send({posts, user})
})



module.exports = router;