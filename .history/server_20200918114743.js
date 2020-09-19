const express=require("express")

const app=express()


// test server
app.get('/',(req,res)=> res.send("API is runing"))

// Start server
const PORT=process.env.PORT||5000
app.listen(PORT,()=>{console.log(`SERVER Started on Port ${PORT}`)})