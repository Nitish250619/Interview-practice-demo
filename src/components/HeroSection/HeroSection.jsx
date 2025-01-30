import React, { useEffect, useState } from "react";
import { Container, Typography, Box, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import codingAnimation from "../../assets/Animation - 1738169697960.json"; // Add a Lottie animation JSON file
import "./HeroSection.css";

const HeroSection = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setTheme(document.documentElement.getAttribute("data-theme"));
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  return (
    <Container maxWidth="xl" sx={{ py: 6, overflow: "hidden" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          textAlign: { xs: "center", md: "left" },
          width: "100%",
          gap: { xs: 4, md: 6 },
        }}
      >
        {/* Left Side - Text Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: { xs: "100%", md: "50%" },
            minWidth: { md: "50%", lg: "50%" },
            maxWidth: { lg: "600px" },
            px: { xs: 2, sm: 4 },
          }}
        >
          <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <Typography
              variant="h3"
              sx={{
                color: "var(--primary-text)",
                fontWeight: "bold",
                fontSize: { xs: "2rem", sm: "3rem", md: "3.5rem" },
                lineHeight: 1.2,
              }}
            >
              <motion.span whileHover={{ scale: 1.1 }} style={{ color: "#ff5733", display: "inline-block" }}>
                Master
              </motion.span>{" "}
              Your Interview Prep
            </Typography>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.2 }}>
            <Typography
              variant="h6"
              sx={{
                color: "var(--secondary-text)",
                mt: 2,
                fontSize: { xs: "1rem", sm: "1.3rem" },
              }}
            >
              Elevate your coding skills with expert-curated questions and solutions.
            </Typography>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5 }}>
            <Box
              component="button"
              sx={{
                mt: 3,
                px: 4,
                py: 1.5,
                fontSize: "1rem",
                fontWeight: "bold",
                backgroundColor: "#ff5733",
                color: "#fff",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                display: "inline-block",
                transition: "all 0.3s ease",
                "&:hover": { backgroundColor: "#e44d26", transform: "scale(1.05)" },
              }}
            >
              Start Practicing →
            </Box>
          </motion.div>
        </Box>

        {/* Right Side - Animated Illustration */}
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Lottie animationData={codingAnimation} loop autoplay style={{ width: "100%", maxWidth: "400px" }} />
        </Box>
      </Box>

      {/* Feature Cards */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 3,
          mt: 5,
        }}
      >
        {[
          { title: "Real-World Questions", desc: "Practice with real interview problems from top tech companies." },
          { title: "Expert Solutions", desc: "Learn from in-depth explanations and optimized solutions." },
          { title: "Mock Interviews", desc: "Simulate real interview scenarios and improve your confidence." },
        ].map((item, index) => (
          <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: index * 0.2 }}>
            <Card sx={{ width: 280, p: 2, borderRadius: "12px", boxShadow: 3, textAlign: "center" }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold", color: "#ff5733" }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1, color: "var(--secondary-text)" }}>
                  {item.desc}
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </Box>
    </Container>
  );
};

export default HeroSection;
