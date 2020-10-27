const express=require("express")
const connectDB=require("./config/db")
const app=express()


// Init middleware
app.use(express.json( {extended:false}))

// test server
app.get('/',(req,res)=> res.send("<h1>API is runing</h1>"))

// Define routes
app.use('/api/users',require("./routes/api/users"))
app.use('/api/profile',require("./routes/api/profile"))
app.use('/api/posts',require("./routes/api/posts"))
app.use('/api/auth',require("./routes/api/auth"))


// connectDB
connectDB()

// Start server
const PORT=process.env.PORT||5000
app.listen(PORT,()=>{console.log(`SERVER Started on Port ${PORT}`)})