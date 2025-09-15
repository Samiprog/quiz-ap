import React, { useState } from "react";
import "./App.css"; // ✅ Import our custom CSS

function App() {
  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      answer: "Paris",
    },
    {
      question: "Which language is used for React?",
      options: ["Python", "C++", "JavaScript", "Java"],
      answer: "JavaScript",
    },
    {
      question: "What does CSS stand for?",
      options: [
        "Cascading Style Sheets",
        "Colorful Style Syntax",
        "Computer Styled System",
        "Coding Style Sheets",
      ],
      answer: "Cascading Style Sheets",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  // ✅ Restart quiz
  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="quiz-container">
      <h2 className="quiz-title">🎯 Quiz App</h2>

      <div className="quiz-card">
        {showScore ? (
          <>
            <h3 className="score">
              ✅ You scored {score} out of {questions.length}
            </h3>
            <button className="btn restart" onClick={handleRestart}>
              🔄 Restart Quiz
            </button>
          </>
        ) : (
          <>
            <h4 className="question">
              Question {currentQuestion + 1}:{" "}
              {questions[currentQuestion].question}
            </h4>

            <div className="options">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className="btn option"
                  onClick={() => handleAnswer(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
