const express = require("express");
const cors = require("cors");
const dotenv=require("dotenv");
const mongoose=require("mongoose");
const path = require("path");
dotenv.config();
const app=express();

app.use(cors({
    origin: ["http://localhost:5500", "http://127.0.0.1:5500"]
}));

app.get('/',(req,res)=>
{
    res.sendFile(path.join(__dirname, 'index.html'));
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

    const port=process.env.PORT || 3000;
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
connectDb();