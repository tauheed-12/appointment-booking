const mongoose = require("mongoose");
const { Doctor } = require('../models/mongooseModel')
exports.getDoctor = async (req, res) => {
    const doctorId = parseInt(req.params.id);

    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/Doctors", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        const details = await Doctor.findOne({ id: doctorId });
        mongoose.connection.close();

        console.log(details);
        doctemail = details.email;
        res.status(201).json({ message: "got the info", details });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}