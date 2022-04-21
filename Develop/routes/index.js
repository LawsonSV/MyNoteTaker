const app = require("express").Router();
const fs = require("fs");
let api = require("../db/db.json");
const path = require("path");

app.get("/",function(req,res){
    res.sendFile(path.join(__dirname,"../public/index.html"))
})

app.get("/notes",function(req, res){
    res.sendFile(path.join(__dirname,"../public/notes.html"))
})

app.get("*",function(req, res){
    res.sendFile(path.join(__dirname,"../public/index.html"))
})



module.exports = app