const express=require("express")

const app=express()


// test server
app.get('/',(req,res)=> res.send("<h1>API is runing</h1>"))



// Start server
const PORT=process.env.PORT||5000
app.listen(PORT,()=>{console.log(`SERVER Started on Port ${PORT}`)})