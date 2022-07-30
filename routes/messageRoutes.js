// Express Router
const express = require("express");
const router = express.Router();

// Controllers
const MessageController = require('../controllers/messageController');

// Routes
router.post('/sendMessage', MessageController.sendMessage);
router.post('/showMessages', MessageController.showMessages)
router.post('/showUserMessages', MessageController.showMyInbox);

module.exports = router;
