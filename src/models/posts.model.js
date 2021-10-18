const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title:{type:String, required:true},
    body:{type:Number, required:true},
    user:[{type:String, required:true}]

})

const Posts = mongoose.model("posts", postSchema)

module.exports = Posts;