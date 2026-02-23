import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { questions } from "./fireQuestions";

export default function LearnQuiz() {
  const [quiz, setQuiz] = useState([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  // 🔹 Shuffle questions on load
  useEffect(() => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    setQuiz(shuffled);
  }, []);

  if (!quiz.length) return null;

  const handleAnswer = (option) => {
    setSelected(option);
    setShowAnswer(true);

    if (option === quiz[current].answer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    setSelected(null);
    setShowAnswer(false);

    if (current + 1 < quiz.length) {
      setCurrent(current + 1);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    setQuiz(shuffled);
    setCurrent(0);
    setScore(0);
    setSelected(null);
    setShowAnswer(false);
    setShowResult(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-slate-900 border border-white/10 p-10 rounded-xl w-full max-w-xl shadow-xl"
      >

        {!showResult ? (
          <>
            <h2 className="text-2xl font-bold text-red-500 mb-6">
              Fire Safety Quiz
            </h2>

            <p className="mb-6 text-lg">
              {quiz[current].question}
            </p>

            <div className="space-y-4">
              {quiz[current].options.map((option, i) => {
                let style = "bg-slate-800 hover:bg-slate-700";

                if (showAnswer) {
                  if (option === quiz[current].answer)
                    style = "bg-green-500";
                  else if (option === selected)
                    style = "bg-red-500";
                }

                return (
                  <button
                    key={i}
                    disabled={showAnswer}
                    onClick={() => handleAnswer(option)}
                    className={`w-full p-3 rounded-lg transition ${style}`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>

            {showAnswer && (
              <div className="mt-6 text-center">
                <p className="mb-4 text-green-400 font-semibold">
                  Correct Answer: {quiz[current].answer}
                </p>

                <button
                  onClick={nextQuestion}
                  className="bg-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600"
                >
                  Next Question
                </button>
              </div>
            )}
          </>
        ) : (
          <>
            <h2 className="text-3xl font-bold text-center text-red-500 mb-6">
              Quiz Completed!
            </h2>

            <p className="text-center text-xl mb-8">
              Your Score: {score} / {quiz.length}
            </p>

            <button
              onClick={restartQuiz}
              className="w-full bg-red-500 py-3 rounded-lg font-semibold hover:bg-red-600"
            >
              Restart Quiz
            </button>
          </>
        )}
      </motion.div>
    </div>
  );
}