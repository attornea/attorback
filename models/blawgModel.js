const mongoose = require("mongoose");

const blawgSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: { type: String },
    category: { type: String },
    description: { type: Object },
    imageUrl: { type: String },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }

}, { timestamps: true });

module.exports = mongoose.model("Blawg", blawgSchema);
