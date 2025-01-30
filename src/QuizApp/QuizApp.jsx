import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Typography, Button, CircularProgress, LinearProgress } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";
import quizzes from "../Jsons/quizzes.json";

const QuizApp = () => {
  const { quizId } = useParams();
  const navigate = useNavigate();
  const [quizData, setQuizData] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes in seconds
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const quiz = quizzes.find((q) => q.id === quizId);
    if (quiz) {
      setQuizData(quiz);
    } else {
      console.error("Quiz not found");
    }
  }, [quizId]);

  useEffect(() => {
    if (timeLeft <= 0) {
      navigate("/result", { state: { score, totalQuestions: quizData.questions.length, wrongAnswers } });
      return;
    }
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleAnswer = (selectedOption) => {
    const currentQuestion = quizData.questions[currentQuestionIndex];
    setSelectedAnswer(selectedOption);
    setShowFeedback(true);
  
    setTimeout(() => {
      if (selectedOption === currentQuestion.answer) {
        setScore((prevScore) => prevScore + 1);
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 3000); // Confetti for 3 seconds
      } else {
        setWrongAnswers([
          ...wrongAnswers,
          { question: currentQuestion.question, userAnswer: selectedOption, correctAnswer: currentQuestion.answer }
        ]);
      }
  
      if (currentQuestionIndex + 1 < quizData.questions.length) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null);
        setShowFeedback(false);
      } else {
        // Ensure the final state is passed to the result page
        navigate("/result", {
          state: {
            score: score + (selectedOption === currentQuestion.answer ? 1 : 0),
            totalQuestions: quizData.questions.length,
            wrongAnswers,
          },
        });
      }
    }, 1000); // Delay to show feedback before moving to the next question
  };
  

  if (!quizData) return <CircularProgress sx={{ display: "block", margin: "auto", color: "#ff6f61" }} />;

  const currentQuestion = quizData.questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / quizData.questions.length) * 100;
  const timeProgress = ((15 * 60 - timeLeft) / (15 * 60)) * 100;

  return (
    <Box sx={{ p: 4, maxWidth: 700, mx: "auto", textAlign: "center", background: "#121212", minHeight: "100vh", color: "#ffffff" }}>
      {showConfetti && <Confetti />}
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 2, color: "#ff6f61" }}>
        {quizData.title}
      </Typography>

      <Box sx={{ position: "relative", mb: 4 }}>
        <LinearProgress
          variant="determinate"
          value={timeProgress}
          sx={{
            height: 10,
            borderRadius: 5,
            background: "#3a3a3a",
            "& .MuiLinearProgress-bar": {
              background: "#ff6f61",
            },
          }}
        />
        <Typography variant="subtitle2" sx={{ position: "absolute", top: -25, right: 0, color: "#ff6f61" }}>
          Time Left: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, "0")}
        </Typography>
      </Box>

      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          height: 10,
          borderRadius: 5,
          mb: 4,
          background: "#3a3a3a",
          "& .MuiLinearProgress-bar": {
            background: "#4caf50",
          },
        }}
      />
      <Typography variant="subtitle1" sx={{ mb: 4, color: "#ffffff" }}>
        Question {currentQuestionIndex + 1} of {quizData.questions.length}
      </Typography>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestionIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h6" sx={{ mb: 4, color: "#ffffff" }}>
            {currentQuestion.question}
          </Typography>
        </motion.div>
      </AnimatePresence>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {currentQuestion.options.map((option, index) => (
          <motion.div key={index} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="contained"
              color={
                showFeedback
                  ? option === currentQuestion.answer
                    ? "success"
                    : option === selectedAnswer
                    ? "error"
                    : "primary"
                  : "primary"
              }
              onClick={() => handleAnswer(option)}
              fullWidth
              sx={{
                mb: 2,
                transition: "background-color 0.3s, transform 0.2s",
                transform: showFeedback ? "scale(1.05)" : "scale(1)",
                "&:hover": {
                  background: showFeedback
                    ? option === currentQuestion.answer
                      ? "#4caf50"
                      : option === selectedAnswer
                      ? "#f44336"
                      : "#2196f3"
                    : "#ff6f61",
                },
              }}
              disabled={showFeedback}
            >
              {option}
            </Button>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default QuizApp;