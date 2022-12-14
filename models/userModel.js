const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: { type: String, required: true },
    sharedDiary: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    password: { type: String, required: true },
    token: { type: String },
    workExperience: { type: Array, required: false },
    profileImage: { type: String },
    education: { type: Array, required: false },
    gender: { type: String },
    country: { type: String },
    bio: { type: String },
    practiceArea: { type: Array },
    areaOfSpecialization: { type: String },
    lisenceNo: { type: Number },
    firstName: { type: String, required: true },
    earnings: { type: Number },
    consultationFee: { type: String },
    lastName: { type: String, required: true },
    role: { type: String, enum: ["User", "Lawyer", "Student"], required: true, default: "User" },
    status: { type: String, enum: ["Inactive", "Active"], default: "Inactive" },
    isVerified: { type: Boolean, default: false },
    isDeleted: { type: Boolean, default: "false" },
    deletedAt: { type: Date, default: null }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
