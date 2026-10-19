const express = require("express");
const dotenv=require("dotenv");
const mongoose=require("mongoose");

dotenv.config();
const app=express();

app.get('/',(req,res)=>
{
    res.send("hello from backend");
});

async function connectDb()
{
    try{
    const ri=process.env.MONGO_URI;
    if(!ri)
    {
        throw new Error("erreur de connexion");
    }
    await mongoose.connect(ri);
    console.log("connexion avce succes!!");

    const port=process.env.PORT;
    app.listen(port,()=>
    {
        console.log("le port en écoute est:"+port);
    })
    }
    catch(error){
        console.error("connection impossible!!"+error.message);
        process.exit(1);
    }
}
module.exports=connectDb();