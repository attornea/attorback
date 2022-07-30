const { default: mongoose } = require('mongoose');
const Message = require('../models/messageModel');
const Thread = require('../models/threadModel');

exports.sendMessage = async (req, res) => {
    let request = req.body;
    let text = request.text;
    let userId = request.user;
    let lawyerId = request.lawyer;
    console.log(request);
    // const findChat = await Thread.findOne({ sentBy: userFrom, sentTo: userTo });
    // console.log(findChat);
    // if (!(findChat === null)) {
    //     await Thread.updateOne({ sentBy: userFrom, sentTo: userTo }, { $set: { text: text } })
    //     return res.status(200).json('sent message successfully')
    // }
    // else {
    const thread = new Thread({
        _id: mongoose.Types.ObjectId(),
        userId: userId,
        lawyerId: lawyerId,
        text: text,
        sentBy: request.sentBy
    })
    await thread.save();

    return res.status(200).json('sent message successfully')
    // }
}


exports.showMessages = async (req, res) => {
    let request = req.body
    let userId = request.user;
    let lawyerId = request.lawyer;
    const findChat = await Thread.find({ userId: userId, lawyerId: lawyerId });
    if (findChat.length === 0) {
        return res.status(400).json("No Chat Avalible")
    }
    return res.status(200).json(findChat)
}


exports.showMyInbox = async (req, res) => {
    let request = req.body;
    let userId = request.user;
    let lawyerId = request.lawyer;
    const findChats = await Thread.find({ userId: userId, lawyerId: lawyerId }).sort({ createdAt: 1 }).populate('userId');
    // const findAgain = await Thread.find({ sentTo: userFrom, sentBy: userTo });
    // let Data = findChats.concat(findAgain);
    // Data.sort();
    // if (findChats.length === 0) {
    //     const findAgain = await Thread.find({ sentTo: userFrom, sentBy: userTo })
    //     return res.status(200).json(findAgain);
    // }
    return res.status(200).json(findChats);


}