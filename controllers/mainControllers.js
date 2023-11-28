const path= require("path");


    const main= (req,res)=> {
        res.sendFile(path.join(__dirname,"../views/home.html"))
    }  


    const verAbout= (req,res)=> {
        res.sendFile(path.join(__dirname,"../views/about.html"))
    }  
    
module.exports= {main, verAbout}