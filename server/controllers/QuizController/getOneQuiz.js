const Quiz = require('../../models/Quiz');

exports.getOneQuiz = async (req, res) => {
  try {
    const quizIDParam = req.params.QuizID;

    
    const quiz = await Quiz.findOne({ QuizID: quizIDParam });

    if (!quiz) {
      return res.status(404).json({ message: 'Quiz not found' });
    }

    const simplifiedQuestions = quiz.questions.map(question => ({
      id: question._id,
    }));

    
    const simplifiedQuiz = {
      QuizID: quiz.QuizID,
      title: quiz.title,
      descb: quiz.descb,
      Quizpin: quiz.Quizpin,
      NPSScore: quiz.NPSScore,
      questions: simplifiedQuestions,
      QuestionTimInterval: quiz.QuestionTimInterval,
      QuestionLimit:quiz.QuestionLimit,
    };

    res.json(simplifiedQuiz);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching the quiz' });
  }
  };