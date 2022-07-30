const mongoose = require('mongoose');

const threadSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    lawyerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    text: { type: String, default: null },
    sentBy: { type: String, enum: ['user', 'lawyer'] },
    attachment: { type: Array, default: null },
    isDeleted: { type: Boolean, required: true, default: false },
    deletedAt: { type: Date, default: null },
    createdAt: { type: Date, default: null }
}, { timestamps: true });

module.exports = mongoose.model('Thread', threadSchema);