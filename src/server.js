const express = require("express");
const connect = require("./configs/db")
const signup = require("./controllers/auth.controller")
const signin = require("./controllers/auth.controller")
const posts = require("./controllers/post.controller")

const app = express();

app.use(express.json());

app.use("/", signup);
app.use("/", signin);

app.use("/posts", posts)

const start = async ()=>{
    await connect();

    app.listen("2233", ()=>{
        console.log("Listeing on port 2233")
    })
}

module.exports = start;