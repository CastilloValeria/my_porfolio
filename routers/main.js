const express = require('express');
const router=express.Router();


const {main,verAbout} = require("../controllers/mainControllers.js");


router.get("/",main);
router.get("/about",verAbout);

module.exports= router;
