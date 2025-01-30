import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import { keyframes } from "@emotion/react";

// Keyframes for animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const ResultPage = () => {
  const { state } = useLocation(); // Receive score, total questions, and wrong answers from QuizPage
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const { score, totalQuestions, wrongAnswers } = state || {
    score: 0,
    totalQuestions: 0,
    wrongAnswers: [],
  };

  const handleTryAgain = () => {
    navigate("/quiz/javascript"); // Navigate back to the quiz page to try again
  };

  return (
    <Box
      sx={{
        padding: 4,
        textAlign: "center",
        maxWidth: 800,
        margin: "0 auto",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#121212", // Dark background color
      }}
    >
      <Paper
        elevation={6}
        sx={{
          padding: isMobile ? 3 : 4,
          borderRadius: 4,
          backgroundColor: "#1e1e1e", // Dark theme background
          color: "#ffffff", // White text for dark mode
          width: "100%",
          animation: `${fadeIn} 0.8s ease-out`,
        }}
        component={motion.div}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          sx={{
            background: "linear-gradient(45deg, #ff6f61, #ffcc00)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            animation: `${pulse} 2s infinite`,
          }}
        >
          Quiz Completed
        </Typography>
        <Typography
          variant="h6"
          sx={{
            marginBottom: 3,
            color: "#ffffff", // White color for score text
          }}
        >
          Your Score: {score} / {totalQuestions}
        </Typography>

        {wrongAnswers && wrongAnswers.length > 0 ? (
          <Box sx={{ textAlign: "left", marginTop: 3 }}>
            <Typography
              variant="h6"
              fontWeight="bold"
              gutterBottom
              sx={{ color: "#ff6f61" }} // Highlight incorrect answers in red
            >
              Incorrect Answers:
            </Typography>
            <List>
              {wrongAnswers.map((answer, index) => (
                <React.Fragment key={index}>
                  <ListItem alignItems="flex-start">
                    <ListItemText
                      primary={
                        <Typography
                          variant="body1"
                          sx={{ fontWeight: "bold", color: "#ffffff" }} // Bold white text for questions
                        >
                          {answer?.question || "No question available"}
                        </Typography>
                      }
                      secondary={
                        <Typography
                          variant="body2"
                          sx={{ color: "#b0b0b0" }} // Light grey for the answer details
                        >
                          Your Answer: {answer?.userAnswer || "N/A"} | Correct Answer: {answer?.correctAnswer || "N/A"}
                        </Typography>
                      }
                    />
                  </ListItem>
                  {index < wrongAnswers.length - 1 && <Divider sx={{ backgroundColor: "#444" }} />}
                </React.Fragment>
              ))}
            </List>
          </Box>
        ) : (
          <Typography variant="h6" sx={{ color: "#b0b0b0", marginTop: 3 }}>
            No Incorrect Answers!
          </Typography>
        )}

        <Button
          variant="contained"
          sx={{
            marginTop: 3,
            padding: "10px 30px",
            fontSize: "1rem",
            background: "linear-gradient(45deg, #ff6f61, #ffcc00)",
            color: "#000000",
            fontWeight: "bold",
            "&:hover": {
              background: "linear-gradient(45deg, #ffcc00, #ff6f61)",
            },
          }}
          onClick={handleTryAgain}
          component={motion.div}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Try Again
        </Button>
      </Paper>
    </Box>
  );
};

export default ResultPage;
