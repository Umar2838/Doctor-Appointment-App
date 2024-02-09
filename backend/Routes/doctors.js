import express from "express"
import {updateDoctor,deleteDoctor,getAllDoctor,getSingleDoctor, getDoctorProfile} from "../Controllers/doctorController.js"
// import { authenticate,restrict } from "../auth/verifyToken.js"
import reviewRouter from "./review.js"

const router = express.Router()

// nested route
router.use("/:doctorId/reviews",reviewRouter)
router.get("/",getAllDoctor)
router.get("/:id",getSingleDoctor)
router.get("/:id",updateDoctor)
router.get("/:id",deleteDoctor)
router.get("/profile/me",getDoctorProfile)

export default router

