const Quiz = require('../../models/Quiz');

exports.getSingleQuestion = async (req, res) => {
    try {
        const { QuestionID } = req.params;
        const {QuizID}=req.body;
    
        
        const quiz = await Quiz.findOne({ QuizID });
    
        if (!quiz) {
          return res.status(404).json({ message: 'Quiz not found' });
        }
    
      
        const question = quiz.questions.find(q => String(q._id) === QuestionID);
    
        if (!question) {
          return res.status(404).json({ message: 'Question not found in the given quiz' });
        }
    
        res.json(question);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching the question' });
      }
  };