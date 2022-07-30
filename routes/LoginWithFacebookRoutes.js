
const express = require("express");
const router = express.Router();

// Controllers
const FaceBook = require('../controllers/LoginWithFacebookController')

router.post('/loggedIn', FaceBook.isLoggedIn);
router.post('/logout', FaceBook.logout);
router.post('/profile', FaceBook.profile);
router.post('/auth', FaceBook.auth);
router.post('/verify', FaceBook.verify)

// router.post('/render', FaceBook.render)



module.exports = router;
