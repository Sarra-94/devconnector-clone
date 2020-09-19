const express=require("express")
const conectDB=require("./config/db")
const app=express()


// test server
app.get('/',(req,res)=> res.send("<h1>API is runing</h1>"))


// connectDB
connectDB()

// Start server
const PORT=process.env.PORT||5000
app.listen(PORT,()=>{console.log(`SERVER Started on Port ${PORT}`)})