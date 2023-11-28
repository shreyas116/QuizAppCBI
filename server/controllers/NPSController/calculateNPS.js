const Quiz = require('../../models/Quiz');

const calculateNPS = async (req, res) => {
  const { QuizID } = req.params;

  try {
    const quiz = await Quiz.findOne({ QuizID });
    
    if (!quiz) {
      return res.status(404).json({ error: "Quiz not found" });
    }

    const numbersArray = quiz.NPSScore || [];

    const promoters = numbersArray.filter((value) => value >= 8 && value <= 10);
    const detractors = numbersArray.filter((value) => value >= 0 && value <= 5);

    const promoterPercentage = (promoters.length / numbersArray.length) * 100;
    const detractorPercentage = (detractors.length / numbersArray.length) * 100;
    const nps = Math.round(promoterPercentage - detractorPercentage);
console.log("nps",nps);
    return res.status(200).json({ message: 'Calculated NPS Score ' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { calculateNPS };
