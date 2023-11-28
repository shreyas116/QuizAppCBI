const Quiz =require('../../models/Quiz');

// Controller function to add questions to a quiz
const addQuestionsToQuiz = async (req, res) => {
  
  
const {QuizID} = req.params;
console.log("QuizId",QuizID);
  try {
    const quiz = await Quiz.findOne({ QuizID: QuizID });

    if (!quiz) {
      return res.status(404).json({ message: 'Quiz not found' });
    }

    
    const {questions} = req.body;

   
    quiz.questions.push(...questions);

    // Save the updated quiz
    await quiz.save();

    return res.status(200).json({ message: 'Questions added to the quiz' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { addQuestionsToQuiz };
