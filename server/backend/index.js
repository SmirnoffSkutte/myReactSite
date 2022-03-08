import express from "express";
import mongoose from "mongoose";
import router from "./router.js";
import fileUpload from "express-fileupload";
import cors from 'cors'
import google from 'googleapis'
import path from 'path'
import fs from 'fs'

const PORT = process.env.PORT || 5000;

const DB_URL="mongodb+srv://SmirnoffSkutte:is280268@cluster0.ouf3u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const app = express();



var corsOptions = {
    origin: "http://localhost:3000",
    'Access-Control-Allow-Origin' : 'http://localhost:3000'
    };
    
app.use(cors({
    origin:'http://localhost:3000',
    'Access-Control-Allow-Origin' : 'http://localhost:3000'
}))


app.use(express.json())

app.use(express.static('static'))

app.use(fileUpload({}))

app.use('/api',router)




async function startApp(){
    try{
        mongoose.connect(DB_URL,{useNewUrlParser:true})
        app.listen(PORT,()=>console.log('AMOGUS sus fewfew'))

    } catch(e) {

        console.log(e)

    }
}

startApp()

