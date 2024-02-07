import jwt from "jsonwebtoken";
import Doctor from "../models/DoctorSchema.js";
import User from "../models/UserSchema.js";

// export const authenticate = async (req, res, next) => {
//     // Get token from header
//     const authToken = req.headers.authorization;
//     // Check if token exists and has correct format
//     if (!authToken || !authToken.startsWith('Bearer')) {
//         return res.status(401).json({ success: false, message: "No token provided or invalid format" });
//     }
//     try {
//         const token = authToken.split(' ')[1];
//         // Verify token

//         const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
//         // Attach decoded user ID and role to request object
//        console.log(decoded)
//         req.userId = decoded.id;
//         req.role = decoded.role;
//         next();  // Call the next middleware
//     } catch (err) {
//         if (err.name === "TokenExpiredError") {
//             return res.status(401).json({ success: false, message: "Token is expired" });
//         }
//         console.error(err);
//         return res.status(401).json({ success: false, message: "Invalid Token" });
//     }
// }

// export const restrict = roles => async (req, res, next) => {
//     try {
//         const userId = req.userId;
//         let user;
//         // Check if the user is a patient or a doctor based on the user ID
//         const patient = await User.findById(userId);
//         const doctor = await Doctor.findById(userId);
//         if (patient) {
//             user = patient;
//         }
//         if (doctor) {
//             user = doctor;
//         }
//         // Check if the user role is authorized
//         if (!roles.includes(user.role)) {
//             return res.status(401).json({ success: false, message: "You are not authorized" });
//         }
//         next(); // Call the next middleware
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ success: false, message: "Internal Server Error" });
//     }
// }
