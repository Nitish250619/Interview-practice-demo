import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";

const DetailedQuizPageCard = ({ title, category, topic, totalQuestions }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card
        sx={{
          maxWidth: 380,
          borderRadius: 4,
          boxShadow: 5,
          overflow: "hidden",
          bgcolor: "#1E1B4B",
          color: "#fff",
          p: 2,
        }}
      >
        <CardContent>
          {/* Category */}
          <Typography
            variant="subtitle2"
            sx={{
              opacity: 0.8,
              textTransform: "uppercase",
              letterSpacing: 1.2,
              color: "#FFD700",
            }}
          >
            {category}
          </Typography>

          {/* Title */}
          <Typography
            variant="h5"
            fontWeight="bold"
            mt={1}
            sx={{ color: "#FFB400" }}
          >
            {title}
          </Typography>

          {/* Topic */}
          <Typography
            variant="body1"
            sx={{ mt: 1, fontStyle: "italic", opacity: 0.8 }}
          >
            Topic: {topic}
          </Typography>

          {/* Total Questions */}
          <Box mt={2} display="flex" alignItems="center">
            <Typography variant="body2" sx={{ flexGrow: 1 }}>
              Total Questions: {totalQuestions}
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", color: "#FF6A00" }}
            >
              {totalQuestions}
            </Typography>
          </Box>

          {/* Start Quiz Button */}
          <Button
            variant="contained"
            fullWidth
            sx={{
              mt: 3,
              bgcolor: "#FF6A00",
              "&:hover": { bgcolor: "#E65C00" },
              textTransform: "none",
              fontSize: 16,
              fontWeight: "bold",
              borderRadius: 2,
            }}
          >
            Start Quiz
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default DetailedQuizPageCard;
