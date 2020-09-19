const express=require("express")
const mongoose=require("mongoose")
const bodyParser=require("body-parser")

const app=express()
// boy Parser Middleware
app.use(bodyParser.json())


const PORT=process.env.PORT||5000
// Data base connection
app.listen(PORT,()=>{console.log(`SERVER Started on Port ${PORT}`)})