import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import DetailedQuizPazeCard from "./DetailedQuizPazeCard";
import { Link } from "react-router-dom";

const quizData = [
  // Basic Level
  {
    id: "js-basics-1",
    title: "JavaScript Basics 1",
    category: "Programming",
    topic: "Variables & Data Types",
    totalQuestions: 10,
  },
  {
    id: "javascript-2",
    title: "JavaScript Basics 2",
    category: "Programming",
    topic: "Functions & Scope",
    totalQuestions: 12,
  },
  {
    id: "javascript-3",
    title: "JavaScript Basics 3",
    category: "Programming",
    topic: "Operators & Expressions",
    totalQuestions: 8,
  },

  // Intermediate Level
  {
    id: "js-intermediate-1",
    title: "JavaScript Intermediate 1",
    category: "Programming",
    topic: "Promises & Async/Await",
    totalQuestions: 15,
  },
  {
    id: "javascript-5",
    title: "JavaScript Intermediate 2",
    category: "Programming",
    topic: "ES6 Features (Spread, Destructuring)",
    totalQuestions: 14,
  },
  {
    id: "javascript-6",
    title: "JavaScript Intermediate 3",
    category: "Programming",
    topic: "Event Loop & Callbacks",
    totalQuestions: 13,
  },
  {
    id: "javascript-7",
    title: "JavaScript Intermediate 4",
    category: "Programming",
    topic: "Closures & Lexical Scope",
    totalQuestions: 12,
  },

  // Advanced Level
  {
    id: "javascript-8",
    title: "JavaScript Advanced 1",
    category: "Programming",
    topic: "Prototypes & Inheritance",
    totalQuestions: 18,
  },
  {
    id: "javascript-9",
    title: "JavaScript Advanced 2",
    category: "Programming",
    topic: "Modules & Import/Export",
    totalQuestions: 17,
  },
  {
    id: "javascript-10",
    title: "JavaScript Advanced 3",
    category: "Programming",
    topic: "Memory Management & Garbage Collection",
    totalQuestions: 16,
  },
  {
    id: "javascript-11",
    title: "JavaScript Advanced 4",
    category: "Programming",
    topic: "Web APIs & Fetch API",
    totalQuestions: 14,
  },

  // Logical & Problem-Solving
  {
    id: "javascript-12",
    title: "JavaScript Logical 1",
    category: "Programming",
    topic: "Higher Order Functions",
    totalQuestions: 10,
  },
  {
    id: "javascript-13",
    title: "JavaScript Logical 2",
    category: "Programming",
    topic: "Recursion & Iteration",
    totalQuestions: 13,
  },
  {
    id: "javascript-14",
    title: "JavaScript Logical 3",
    category: "Programming",
    topic: "Sorting & Searching Algorithms",
    totalQuestions: 15,
  },
  {
    id: "javascript-15",
    title: "JavaScript Logical 4",
    category: "Programming",
    topic: "Data Structures (Stacks, Queues, Maps, Sets)",
    totalQuestions: 14,
  },

  // Miscellaneous Topics
  {
    id: "javascript-16",
    title: "JavaScript Misc 1",
    category: "Programming",
    topic: "Debugging & Error Handling",
    totalQuestions: 12,
  },
  {
    id: "javascript-17",
    title: "JavaScript Misc 2",
    category: "Programming",
    topic: "Unit Testing with Jest",
    totalQuestions: 10,
  },
];


const DetailedQuizPage = () => {
  return (
    <Container maxWidth="xl">
      {/* Page Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          align="center"
          gutterBottom
          sx={{ color: "#333", mt: 4 }}
        >
          JavaScript Quiz Collection
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          sx={{ color: "gray", mb: 3 }}
        >
          Test your JavaScript skills with various topics & difficulty levels.
        </Typography>
      </motion.div>

      {/* Quiz Grid */}
      <Box sx={{ py: 4 }}>
        <Grid
          container
          spacing={4}
          justifyContent="center"
          sx={{ px: { xs: 2, sm: 4, md: 6 } }}
        >
          {quizData.map((quiz, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={index}
              component={motion.div}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Link to={`/quiz/${quiz.id}`} style={{ textDecoration: "none" }}>
                <DetailedQuizPazeCard {...quiz} />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default DetailedQuizPage;
