const Quiz =require('../../models/Quiz');


const addNPSData = async (req, res) => {
  
  
const {QuizID} = req.params;

  try {
    const quiz = await Quiz.findOne({ QuizID: QuizID });

    if (!quiz) {
      return res.status(404).json({ message: 'Quiz not found' });
    }

    
    const {NPSScore} = req.body;

    
    quiz.NPSScore.push(...NPSScore);

    
    await quiz.save();

    return res.status(200).json({ message: 'addNPSData added to the quiz for surevy' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { addNPSData };
