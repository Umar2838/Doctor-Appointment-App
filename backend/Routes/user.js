import express from "express"
import { updateUser,deleteUser,getAllUser,getSingleUser,getUserProfile,getMyAppointments } from "../Controllers/userControllers.js";
// import { authenticate , restrict } from "../auth/verifyToken.js";
const router = express.Router()

router.get("/:id",getSingleUser)
router.get("/",getAllUser)
router.put("/:id",updateUser)
router.delete("/:id",deleteUser)
router.get("/profile/me",getUserProfile)
router.get("/appointments/my-appointments",getMyAppointments)

export default router