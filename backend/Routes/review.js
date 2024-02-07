import express from "express"
import { createReview, getAllReviews } from "../Controllers/reviewController.js"
// import {authenticate,restrict} from "./../auth/verifyToken.js"

const router = express.Router({mergeParams:true})

// doctor/doctorid/reviews


router.route("/").get(getAllReviews).post(createReview)

export default router;