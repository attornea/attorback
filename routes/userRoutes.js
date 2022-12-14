// Express Router
const express = require("express");
const router = express.Router();

// Controllers
const UserController = require('../controllers/userController');
const MessageController = require('../controllers/messageController');

// Routes
router.post("/register", UserController.registerUser);
router.get("/verify/:id/:token", UserController.verifyEmail);
router.post("/login", UserController.login);
router.post("/postQuestion", UserController.askQuestion)
router.post("/hire", UserController.hire)
router.post('/talk', UserController.talk)
router.post('/viewLawyers', UserController.viewLawyers);
router.post('/viewAllLawyers', UserController.viewAllLawyers);
router.post('/showAllStudents', UserController.showAllStudents);
router.post('/userData', UserController.getUserData);
router.post('/studentData', UserController.getStudentData);

router.post('/lawyerData', UserController.getLawyerData);
router.post('/viewqueries', UserController.viewqueries);
router.post("/showMyQuestions", UserController.showMyQuestions);
// router.post('/addQuestion',UserController.askQuestion)
router.post("/setProfile", UserController.updateUser);
router.post("/setLawyerProfile", UserController.updateLawyer);
router.post("/addPost", UserController.addPost);
router.post("/getLawyerInfo", UserController.getLawyerData);
router.post("/deleteQuestion", UserController.deleteQuestion);
router.post("/getCitation", UserController.getCitation);
router.post("/showPosts", UserController.showPosts);
router.post("/showAllQuestions", UserController.showAllQuestion);
router.post("/commentOnPost", UserController.commentOnPost);
router.post("/showComments", UserController.showPostComment);
router.post("/addComment", UserController.addComment);
router.post("/showRespondedQuestion", UserController.showResponded);
router.post("/showResponded", UserController.showMyResponded);
router.post("/showAllUnAnsweredQuestions", UserController.unAnsweredQuestions);
router.post("/getUserData", UserController.getLawyerInfo);
router.post('/createBooking', UserController.createBooking);
router.post('/showAllBookings', UserController.showAllBookings);
router.post('/getDateCases', UserController.getCasesForDate)
router.post('/getLawyerByCategory', UserController.getLawyerByCategory);
router.post('/getOpenClosedCases', UserController.getOpenClosedCases);
router.post("/updateComment", UserController.updateComment);
router.post("/shareDiary", UserController.shareDiary);
router.post('/getCasesForStudent', UserController.getCases);
router.post('/showQuestionUsingId', UserController.showQuestion);
router.post('/showUserBookings', UserController.showUserBookings);
router.post('/showMyMessages', MessageController.showMyInbox);
router.post('/sendMessage', MessageController.sendMessage);

module.exports = router;
