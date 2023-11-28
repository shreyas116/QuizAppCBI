const Quiz = require('../../models/Quiz');

exports.GetQuizData = async (req, res) => {
    try {
      const quizzes = await Quiz.find();
      res.json(quizzes);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while fetching quizzes' });
    }
  };