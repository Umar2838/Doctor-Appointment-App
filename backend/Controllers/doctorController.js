import Doctor from "../models/DoctorSchema.js"

export const updateDoctor = async (req, res) => {
    const id = req.params.id

    try {
        const updateDoctor = await User.findByIdAndUpdate(id, { $set: req.body }, { new: true })

        res.status(200).json({ success: true, message: "Successfully Upadted", data: updateDoctor })

    }
    catch (err) {
        res.status(500).json({ success: false, message: "failed upadte" })
        console.log(err)

    }
}

export const deleteDoctor = async (req, res) => {
    const id = req.params.id

    try {
        const deleteDoctor = await Doctor.findByIdAndDelete(id)

        res.status(200).json({ success: true, message: "Successfully Deleted" })

    }
    catch (err) {
        res.status(500).json({ success: false, message: "failed delete" })
    }
}

export const getSingleDoctor = async (req, res) => {
    const id = req.params.id

    try {
        const doctors = await Doctor.findById(id).select("-password")

        res.status(200).json({ success: true, message: "Doctor found", data: doctors })

    }
    catch (err) {
        res.status(404).json({ success: false, message: "Doctor not found" })
    }
}

export const getAllDoctor = async (req, res) => {

    try {

        const { query } = req.query;
        let doctors;
        if (query) {
            doctors = await Doctor.find({ 
            isApproved: "approved",
             $or: [
                { name: { $regex: query, $options: "i" } },
                { specialization: { $regex: query, $options: "i" } },
            ], 
        }).select("-password")
        }
        else {
            
            // .select use for exclude password when sending the resonse 
            doctors = await Doctor.find({isApproved:"approved"}).select("-password")
        }
        
        res.status(200).json({ success: true, message: "Doctors found", data:doctors })
    }
    catch (err) {
        res.status(404).json({ success: false, message: "Doctors not found" })
        console.error(err)
    }

}