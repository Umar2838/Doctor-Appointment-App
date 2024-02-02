import User from "../models/UserSchema.js"
import Doctor from "../models/DoctorSchema.js"
import jwt from  'jsonwebtoken'
import bcrypt from "bcryptjs"

const generateToken = user=>{
    return jwt.sign({id:user._id,role:user.role},process.env.JWT_SECRET_KEY,{
        // optional for token expiry espireIn: "14d",
    })
}

export const register = async(req,res)=>{
    
    const {email,password,name,role,photo,gender} =  req.body
    
    try{
        let user;

        if (role === "patient") {
            user = await User.findOne({ email });
        } else if (role === "doctor") {
            user = await Doctor.findOne({ email });
        }
        
        // check if user exists
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }
        
        // hash password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);
        
        // Initialize the user object outside the role-specific blocks
        let newUser;
        
        if (role === "patient") {
            newUser = new User({
                name,
                email,
                password: hashPassword,
                photo,
                gender,
                role,
            });
        }
        
        if (role === "doctor") {
            newUser = new Doctor({
                name,
                email,
                password: hashPassword,
                photo,
                gender,
                role,
            });
        }
        
        await newUser.save();
        res.status(200).json({ success: true, message: "User successfully created" });
        
    }
    catch(err){
        res.status(500).json({success:false,message:"Internal server error , try again"})
      console.error(err)
    }
}

export const login = async (req,res)=>{
   
    const {email} = req.body
   
    try{
let user = null;

const patient = await User.findOne({email})
const doctor = await Doctor.findOne({email})

if(patient){
    user = patient
}
if(doctor){
    user = doctor
}

// check if user exist or not

if(!user){
    return res.status(404).json({message:"User not found"})
}

const isPassworMatch = await bcrypt.compare(req.body.password,user.password)

// campare password
if(!isPassworMatch){
    return res.status(400).json({status:false, message:"Invalid credentials"})
}
// get token

const token = generateToken(user)

const {password,role,appointments, ...rest} = user._doc

res.status(200).json({status:true, message:"Successfully Login" , token , data:{...rest},role });

    }catch(err){
        res.status(500).json({status:false, message:"failed to login"});
   
    }
}