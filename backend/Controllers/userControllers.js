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

            export const getUserProfile = async(req,res)=>{
                const userId = req.userId
                try{
const user =  await User.findById(userId)

if(!user){
    return res.status(404).json({success:false , message:"User not Found"})
}
const {password,...rest} = user._doc
res.status(200).json({success:true , message:"Profile info is getting",data:{...rest}})

                }catch(err){
                    res.status(500).json({success:false,message:"Something went wrong , cannot get "})

                }
            }


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