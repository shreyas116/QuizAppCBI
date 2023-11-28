const Quiz = require("../../models/Quiz");

const PublishQuiz = async (req, res) => {
  const { QuizID } = req.params;
  console.log("QuizId", QuizID);
  try {
    const quiz = await Quiz.findOne({ QuizID: QuizID });

    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }
 
    quiz.isPublished = true;
    await quiz.save();

    return res.status(200).json({ message: 'Quiz Published Successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { PublishQuiz };
