const Quiz = require("../../models/Quiz");
const { v4: uuidv4 } = require("uuid");

exports.CreateQuiz = async (req, res) => {
  try {
    const { title, descb, QuestionTimInterval,QuestionLimit } = req.body;

    let isUnique = false;
    let QuizID;

    while (!isUnique) {
      QuizID = uuidv4();

      const existingQuiz = await Quiz.findOne({ QuizID });

      if (!existingQuiz) {
        isUnique = true;
      }
    }
    console.log("QuizID", QuizID);
    const newQuiz = new Quiz({
      QuizID: QuizID,
      title: title,
      descb: descb,
    
      questions: [],
      QuestionTimInterval: QuestionTimInterval,
      QuestionLimit:QuestionLimit,
    });

    const savedQuiz = await newQuiz.save();
    res.json(savedQuiz);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while creating the quiz" });
  }
};
