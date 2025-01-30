import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActionArea,
} from "@mui/material";
import { motion } from "framer-motion";

// Topics Data
const topics = [
  { title: "JavaScript", description: "Explore JS interview questions" },
  { title: "TypeScript", description: "Master TS interview concepts" },
  { title: "React.js", description: "Ace React interview challenges" },
  { title: "Node.js", description: "Crack backend development questions" },
  { title: "Data Structures", description: "Sharpen your problem-solving skills" },
  { title: "Algorithms", description: "Enhance algorithmic thinking" },
];

const TopicsOverview = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setTheme(document.documentElement.getAttribute("data-theme"));
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  return (
    <Container maxWidth="lg" sx={{ py: 6, textAlign: "center" }}>
      {/* Heading Animation */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            color: theme === "dark" ? "#fff" : "#333",
            mb: 3,
            textShadow: theme === "dark" ? "0px 0px 15px rgba(255, 255, 255, 0.3)" : "none",
          }}
        >
          Explore Interview Topics
        </Typography>
      </motion.div>

      {/* Grid Layout for Topics */}
      <Grid container spacing={4} justifyContent="center">
        {topics.map((topic, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <motion.div
              whileHover={{ scale: 1.05, rotateY: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <Card
                sx={{
                  background: theme === "dark"
                    ? "linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05))"
                    : "rgba(255, 255, 255, 0.7)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  color: theme === "dark" ? "#fff" : "#333",
                  boxShadow: theme === "dark"
                    ? "0px 4px 20px rgba(0, 255, 255, 0.3)"
                    : "0px 4px 20px rgba(0, 0, 0, 0.1)",
                  borderRadius: "12px",
                  overflow: "hidden",
                  border: theme === "dark" ? "1px solid rgba(0, 255, 255, 0.2)" : "none",
                  transform: "perspective(1000px) rotateX(10deg)",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    transform: "perspective(1000px) rotateX(0deg)",
                  },
                }}
              >
                <CardActionArea>
                  <CardContent sx={{ p: 4 }}>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: "bold",
                        textShadow: theme === "dark" ? "0px 0px 10px rgba(0, 255, 255, 0.5)" : "none",
                      }}
                    >
                      {topic.title}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1, opacity: 0.8 }}>
                      {topic.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TopicsOverview;
