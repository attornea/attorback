const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    threadId: { type: mongoose.Schema.Types.ObjectId, ref: 'Thread' },
    // to: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    // from: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    // text: { type: Array, default: null },
    // attachment: { type: Array, default: null },
    isDeleted: { type: Boolean, required: true, default: false },
    deletedAt: { type: Date, default: null }
}, { timestamps: true });

module.exports = mongoose.model('Message', messageSchema);