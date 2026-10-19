const express = require("express");
const app=express();

app.get('/',(req,res)=>
{
    res.send("hello from backend");
});

const port=3000;
    app.listen(port,()=>
    {
        console.log("le port en écoute est:"+port);
    });
