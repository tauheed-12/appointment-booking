const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
    id: Number,
    name: String,
    specialty: String,
    address: String,
    email: String
});
exports.Doctor = mongoose.model('datas', doctorSchema);