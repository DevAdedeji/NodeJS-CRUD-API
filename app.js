require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose');
const app = express();


const dbURL = process.env.DATABASE_URL
mongoose.set('strictQuery', true);
mongoose.connect(dbURL)
.then(result=>{
    console.log("Connected to DB")
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Listening on PORT=${process.env.PORT || 8000}`)
    })
})
.catch(err=>{
    console.log(err)
})