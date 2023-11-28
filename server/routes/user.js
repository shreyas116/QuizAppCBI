const express = require("express");
const router = express.Router();

const  {getUser}  = require("../controllers/EndUserController/getUser");
const {createUser} =require("../controllers/EndUserController/createUser");
const { CreateQuiz } = require("../controllers/QuizController/CreateQuiz");
const {GetQuizData}=require("../controllers/QuizController/GetQuizData");
const {addQuestionsToQuiz}=require("../controllers/QuizController/addQuestionsToQuiz")
const {addNPSData}=require("../controllers/NPSController/addNPSData");
const {calculateNPS}=require("../controllers/NPSController/calculateNPS");
const {getOneQuiz}=require("../controllers/QuizController/getOneQuiz");
const{getSingleQuestion}=require("../controllers/QuizController/getSingleQuestion");
const {AdminLogin}=require("../controllers/AdminController/AdminLogin");
const {LanchQuiz}=require("../controllers/AdminController/LanchQuiz");
const {PublishQuiz}=require("../controllers/AdminController/PublishQuiz");


router.get("/getallUsers", getUser);
router.post("/createUser", createUser);
router.get("/GetQuizData", GetQuizData);
router.post("/createQuiz", CreateQuiz);
router.post("/addQuestionsToQuiz/:QuizID", addQuestionsToQuiz);
router.post("/addNPSData/:QuizID",addNPSData)
router.get("/calculateNPS/:QuizID",calculateNPS);
router.get('/getOneQuiz/:QuizID',getOneQuiz)
router.get("/getQuestion/:QuestionID",getSingleQuestion)
router.post("/lanchQuiz/:QuizID",LanchQuiz);
router.post("/PublishQuiz/:QuizID",PublishQuiz);
router.get("/AdminLogin",AdminLogin);
module.exports = router;


