import express from "express"
import {updateDoctor,deleteDoctor,getAllDoctor,getSingleDoctor} from "../Controllers/doctorController.js"


const router = express.Router()

router.get("/",getAllDoctor)
router.get("/:id",getSingleDoctor)
router.get("/:id",updateDoctor)
router.get("/:id",deleteDoctor)

export default router

