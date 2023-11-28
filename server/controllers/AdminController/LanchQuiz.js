

const Quiz = require("../../models/Quiz");

const LanchQuiz = async (req, res) => {
  const { QuizID } = req.params;
  console.log("QuizId", QuizID);
  try {
    const quiz = await Quiz.findOne({ QuizID: QuizID });

    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }
const Pin =(Math.floor(100000 + Math.random() * 900000));
quiz.Quizpin=Pin;
    await quiz.save();

    res.json(Pin);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { LanchQuiz };
