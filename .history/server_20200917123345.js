const express=require("express")
const mongoose=require("mongoose")
const bodyParser=require("body-parser")

const app=express()
// boy Parser Middleware
app.use(bodyParser.json())

// Data base connection

