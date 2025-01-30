import React, { useState, useEffect } from 'react';
import { Container, Typography, Paper, Box, Button, LinearProgress, Collapse } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import problemOfTheDayData from '../../Jsons/problem_of_the_day.json'; // Import the JSON file
import CachedIcon from '@mui/icons-material/Cached'; // Refresh icon
import CodeIcon from '@mui/icons-material/Code'; // Code icon
import SchoolIcon from '@mui/icons-material/School'; // Practice icon

const ProblemOfTheDay = () => {
  const [questions, setQuestions] = useState([]);
  const [timeRemaining, setTimeRemaining] = useState(7200); // 2 hours in seconds
  const [openAnswerId, setOpenAnswerId] = useState(null); // Track which answer is open

  // Advanced function to get random items using Fisher-Yates shuffle
  const getRandomItems = (arr, count) => {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap elements
    }
    return shuffled.slice(0, count);
  };

  // Function to update questions
  const updateQuestions = () => {
    const { problem_of_the_day } = problemOfTheDayData;
    const jsQuestions = getRandomItems(problem_of_the_day[0].questions, 4);
    const reactQuestions = getRandomItems(problem_of_the_day[1].questions, 4);
    const tsQuestions = getRandomItems(problem_of_the_day[2].questions, 1);
    const dsaQuestions = getRandomItems(problem_of_the_day[3].questions, 1);
    setQuestions([...jsQuestions, ...reactQuestions, ...tsQuestions, ...dsaQuestions]);
    setTimeRemaining(7200); // Reset timer
  };

  // useEffect to set initial questions and refresh every 2 hours
  useEffect(() => {
    updateQuestions(); // Set initial questions
    const interval = setInterval(updateQuestions, 2 * 60 * 60 * 1000); // Refresh every 2 hours
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  // Timer for progress bar
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Function to toggle answer drawer
  const toggleAnswer = (id) => {
    setOpenAnswerId(openAnswerId === id ? null : id);
  };

  // Function to handle practice link
  const handlePractice = (link) => {
    window.open(link, '_blank');
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2c3e50 100%)',
        py: 4,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Animations */}
      {/* Butterflies */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            fontSize: '2rem',
            zIndex: 0,
          }}
          animate={{
            x: [0, 100, 0, -100, 0],
            y: [0, 50, 100, 50, 0],
            rotate: [0, 45, 90, 45, 0],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            repeatType: 'mirror',
          }}
        >
          🦋
        </motion.div>
      ))}

      {/* Flowers */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            fontSize: '1.5rem',
            zIndex: 0,
            color: '#ff6f61',
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            repeatType: 'mirror',
          }}
        >
          🌸
        </motion.div>
      ))}

      {/* Stars */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            fontSize: '1rem',
            zIndex: 0,
            color: '#fff',
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
            repeatType: 'mirror',
          }}
        >
          ⭐
        </motion.div>
      ))}

      {/* Clouds */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            fontSize: '2rem',
            zIndex: 0,
            color: '#ccc',
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            repeatType: 'mirror',
          }}
        >
          ☁️
        </motion.div>
      ))}

      {/* Lightning */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            fontSize: '2rem',
            zIndex: 0,
            color: '#00bfff',
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 1 + Math.random() * 2,
            repeat: Infinity,
            repeatType: 'mirror',
          }}
        >
          ⚡
        </motion.div>
      ))}

      <Container maxWidth="md">
        {/* Title with floating animation */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Typography
            variant="h2"
            align="center"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              color: '#fff',
              fontFamily: '"Pacifico", cursive',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            }}
          >
            Problem of the Day
          </Typography>
        </motion.div>

        {/* Subtitle */}
        <Typography
          variant="subtitle1"
          align="center"
          gutterBottom
          sx={{ color: '#ccc', mb: 4 }}
        >
          Refresh the page or wait 2 hours for new questions!
        </Typography>

        {/* Refresh Button */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button
              variant="contained"
              startIcon={<CachedIcon />}
              onClick={updateQuestions}
              sx={{
                backgroundColor: '#ff6f61',
                color: '#fff',
                fontWeight: 'bold',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
              }}
            >
              Refresh Questions
            </Button>
          </motion.div>
        </Box>

        {/* Progress Bar */}
        <Box sx={{ width: '100%', mb: 4 }}>
          <Typography variant="body2" align="center" sx={{ color: '#ccc', mb: 1 }}>
            Time until next refresh: {Math.floor(timeRemaining / 3600)}h {Math.floor((timeRemaining % 3600) / 60)}m {timeRemaining % 60}s
          </Typography>
          <LinearProgress
            variant="determinate"
            value={(timeRemaining / 7200) * 100}
            sx={{
              height: 10,
              borderRadius: 5,
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              '& .MuiLinearProgress-bar': {
                backgroundColor: '#ff6f61',
              },
            }}
          />
        </Box>

        {/* Questions with animations */}
        <AnimatePresence>
          <Box sx={{ mt: 4 }}>
            {questions.map((question, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    mb: 2,
                    borderRadius: 2,
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#ff6f61' }}>
                      Question {index + 1}
                    </Typography>
                    <Box>
                      <Button
                        variant="outlined"
                        startIcon={<CodeIcon />}
                        onClick={() => toggleAnswer(index)}
                        sx={{
                          color: '#00bfff',
                          borderColor: '#00bfff',
                          '&:hover': {
                            backgroundColor: 'rgba(0, 191, 255, 0.1)',
                          },
                          mr: 2,
                        }}
                      >
                        Answer
                      </Button>
                      <Button
                        variant="outlined"
                        startIcon={<SchoolIcon />}
                        onClick={() => handlePractice(question.practice_link)}
                        sx={{
                          color: '#ff6f61',
                          borderColor: '#ff6f61',
                          '&:hover': {
                            backgroundColor: 'rgba(255, 111, 97, 0.1)',
                          },
                        }}
                      >
                        Practice
                      </Button>
                    </Box>
                  </Box>
                  <Typography variant="body1" sx={{ mt: 1, color: '#fff' }}>
                    {question.question}
                  </Typography>

                  {/* Answer Dropdown */}
                  <Collapse in={openAnswerId === index}>
                    <Paper
                      elevation={0}
                      sx={{
                        mt: 2,
                        p: 2,
                        backgroundColor: 'rgba(0, 0, 0, 0.3)',
                        borderRadius: 2,
                      }}
                    >
                      <Typography variant="body2" sx={{ color: '#fff', fontFamily: 'monospace' }}>
                        {question.answer}
                      </Typography>
                    </Paper>
                  </Collapse>
                </Paper>
              </motion.div>
            ))}
          </Box>
        </AnimatePresence>
      </Container>
    </Box>
  );
};

export default ProblemOfTheDay;