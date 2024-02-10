import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import mongoose, { connect } from "mongoose"
import dotenv from "dotenv"
import authRoute from "./Routes/auth.js"
import userRoute from "./Routes/user.js"
import doctorRoute from "./Routes/doctors.js"
import reviewRoute from "./Routes/review.js"

dotenv.config()
const app = express()
const port = process.env.PORT || 8000

const corsOption = {
    origin:true
}

app.get("/",(req,res)=>{
    res.send("Api is calling")
})

// database connection
mongoose.set('strictQuery',false)
const connectDB = async()=>{
    try{
await mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology:true,
})
console.log("MongoDB is connected")
    }catch(err){
console.error("MongoDB connection failed")
    }
}

// middleware
app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOption))
app.use("/api/v1/auth",authRoute)  //domain/api/v1/register
app.use("/api/v1/users",userRoute)  
app.use("/api/v1/doctors",doctorRoute)  
app.use("/api/v1/reviews",reviewRoute)  



app.listen(port,()=>{
    connectDB();
    console.log("Server is running on")
})