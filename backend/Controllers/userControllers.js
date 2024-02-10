import User from "../models/UserSchema.js";
import Booking from "../models/BookingSchema.js"
import Doctor from "../models/DoctorSchema.js"

export const updateUser = async(req,res)=>{
const id = req.params.id

try{
const updateUser = await User.findByIdAndUpdate(id,{$set:req.body},{new:true})

res.status(200).json({success:true,message:"Successfully Upadted" , data:updateUser})

}
catch(err){
res.status(500).json({success:false,message:"failed upadte"})
console.log(err)

}
}

export const deleteUser = async(req,res)=>{
    const id = req.params.id
    
    try{
    const deleteUser = await User.findByIdAndDelete(id)
    
    res.status(200).json({success:true,message:"Successfully Deleted" })
    
    }
    catch(err){
    res.status(500).json({success:false,message:"failed delete"})
    }
    }

    export const getSingleUser = async(req,res)=>{
        const id = req.params.id
        
        try{
        const user = await User.findById(id).select("-password")
        
        res.status(200).json({success:true,message:"User found" , data:user})
        
        }
        catch(err){
        res.status(404).json({success:false,message:"User not found"})
        }
        }

        export const getAllUser = async(req,res)=>{
            
            try{
                // .select use for exclude password when sending the resonse 
            const users = await User.find({}).select("-password") 
            
            res.status(200).json({success:true,message:"Users found" , data:users})
            
            }
            catch(err){
            res.status(404).json({success:false,message:"Users not found"})
        console.error(err)    
        }

            }

           // Middleware to verify JWT token and extract user ID
export const authenticateUser = (req, res, next) => {
    const token = req.headers.authorization;
  
    if (!token) {
      return res.status(403).json({ message: 'Token is required' });
    }
  
    jwt.verify(token, "72iKdM8720+fPWl96znjM8/mo1xZTf5Dwv/zEjZfzF5y7SDixCvsne2FyGT+AmvHkozSdptb8k4rl/8gzKpU1E9zvtJNX69cT7WE0YNl87MzStMnDcAwU7H2vIU23qUV3qEnVAh+otelbX6yHIaLQsLLf5vG6tA4QE0/StOQCrAla1bwtZPIvC0PC5tlqC4mNt6leRP8hL01aByKWmA5uYoDQ94erZ9bnLvCuDBJFhtYIuzVJ+N39WMVB5UbBFwwYQcg70aPBnBaCS9nUFgh9La5ke5yChWZoGyG9wlVbZk6KwTyzzv+UtsP2HBMR8/6uETWCkCtGCdnN+vYR9yPQQ==" , (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'Unauthorized' });
      }
       req.userId = decoded.id;
       
       
      next();
    });
  };
  
  // Endpoint to get user profile
  export const getUserProfile = async (req, res) => {
    const userId = req.userId; // Access user ID from request object
  console.log(userId)
    try {
      const user = await User.findById(userId);
  
      if (!user) {
        return res.status(404).json({ success: false, message: "User not found" });
      }
  
      const { password, ...rest } = user._doc;
      res.status(200).json({ success: true, message: "Profile info retrieved", data: { ...rest } });
    } catch (err) {
      res.status(500).json({ success: false, message: "Something went wrong, cannot get profile" });
    }
  };
  
            export const getMyAppointments = async(req,res)=>{
                try{
                    // step-1 retrieve appointment from booking

                    const bookings = await Booking.find({user:req.userId})
                    
                    // step-2 extract doctor ids from appointment
                    const doctorsIds = bookings.map(el=>el.doctor.id)
                    
                    // step-3 retrieve doctors using doctor ids
                    const doctors = await Doctor.find({_id:{$in:doctorsIds}}).select("-password")

                    res.status(200).json({success:true , message:"Appointment are getting",data:doctors})

                }
                catch(err){
                    res.status(500).json({success:false,message:"Something went wrong , cannot get "})

                }
            }