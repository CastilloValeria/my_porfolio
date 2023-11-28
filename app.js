const express = require('express');
const app = express();
const path= require('path');

const port=3000;

const rutaMain=require('./routers/main.js')

app.get("/",rutaMain)

app.use(express.static("public"));

app.listen(port, ()=>{
    console.log(`Servidor funcionando en: http://localhost:${port}`);
    });



