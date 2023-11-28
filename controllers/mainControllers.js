const path= require("path");




 const main= (req,res)=> {
        res.sendFile(path.join(__dirname,"../views/home.html"))
    }  

module.exports= {main}