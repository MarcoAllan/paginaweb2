const express = require("express");
const router = express.Router();

//routes
router.get("/",(req,res)=>{
    res.render("index.html", {title: "MOTIBOT"});
});
router.get("/motibot",(req,res)=>{
    res.render("motibot.html", {title: "MOTIBOT"});
});
router.get("/ayuda",(req,res)=>{
    res.render("ayuda.html", {title: "MOTIBOT"});
});
router.get("/contact",(req,res)=>{
    res.render("contact.html", {title: "MOTIBOT"});
});
module.exports = router;