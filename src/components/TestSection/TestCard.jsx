import React from "react";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Importing useNavigate

const TestCard = ({ title, description, image, path, theme }) => {
  const navigate = useNavigate(); // Initialize navigate function

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <Card
        sx={{
          borderRadius: 2,
          overflow: "hidden",
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
          position: "relative",
          height: "100%",
          backgroundColor: theme === "dark" ? "#333" : "#fff", // Dynamic background color
          color: theme === "dark" ? "#fff" : "#000", // Dynamic text color
        }}
      >
        <Box sx={{ position: "relative", height: "200px", overflow: "hidden" }}>
          <motion.img
            src={image}
            alt={title}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            initial={{ opacity: 1 }}
            whileHover={{ opacity: 0.7 }} // Reduced opacity on hover
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: theme === "dark" ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0.7)", // Dynamic overlay color
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              textAlign: "center",
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
              Explore Now!
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              {description}
            </Typography>
          </motion.div>
        </Box>

        <CardContent>
          <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
            {title}
          </Typography>
          <Button
            variant="contained"
            sx={{
              width: "100%",
              mt: 2,
              background: theme === "dark" ? "#FF6A00" : "#FF5733", // Dynamic button color
              color: "#fff",
              textTransform: "none",
              borderRadius: "8px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
              "&:hover": { background: theme === "dark" ? "#E65C00" : "#E64A19" }, // Dynamic hover color
            }}
            onClick={() => navigate(path)} // Navigate to the provided path on button click
          >
            Explore →
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TestCard;
