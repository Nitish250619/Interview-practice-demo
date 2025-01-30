import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Grid, Box, Button, useMediaQuery, useTheme } from "@mui/material"; // MUI imports
import useWindowSize from '../../customHooks/useWindowSize'; // Import the custom hook

// Import images
import img1 from "../../todaysPic/javascriptPic/IMG_20250130_165723.jpg";
import img2 from "../../todaysPic/javascriptPic/WhatsApp Image 2025-01-21 at 12.05.03.jpeg";
import img3 from "../../todaysPic/reactandExtrapic/IMG_20241219_111518.jpg";
import img4 from "../../todaysPic/reactandExtrapic/IMG_20250130_165732.jpg";

// Assume these arrays contain the list of images inside each folder
const javascriptPics = [img1, img2];
const reactAndExtraPics = [img3, img4];

const TodaysPic = () => {
  const [javascriptImage, setJavascriptImage] = useState(null);
  const [reactImage, setReactImage] = useState(null);
  const { width, height } = useWindowSize(); // Get window size
  const theme = useTheme(); // Access MUI theme
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Check if the screen size is small (mobile)

  // Function to randomly pick an image from the two folders
  const getRandomImages = () => {
    const randomJavascriptImage =
      javascriptPics[Math.floor(Math.random() * javascriptPics.length)];
    const randomReactImage =
      reactAndExtraPics[Math.floor(Math.random() * reactAndExtraPics.length)];
    setJavascriptImage(randomJavascriptImage);
    setReactImage(randomReactImage);
  };

  // Initial load
  useEffect(() => {
    getRandomImages();
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "20px", color: "#333" }}>
        Today's Picture
      </h2>

      <AnimatePresence mode="wait">
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          spacing={2}
          style={{ flexWrap: "wrap" }}
        >
          {/* JavaScript Image */}
          {javascriptImage && (
            <Grid
              item
              xs={12} sm={6} md={5} // Responsive Grid Breakpoints
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <motion.div
                key={javascriptImage}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                style={{
                  width: isMobile ? "80%" : "60%", // Adjust image size for mobile
                  padding: "10px",
                }}
              >
                <img
                  src={javascriptImage}
                  alt="Random Javascript Pic"
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "10px",
                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                  }}
                />
              </motion.div>
            </Grid>
          )}

          {/* React Image */}
          {reactImage && (
            <Grid
              item
              xs={12} sm={6} md={5} // Responsive Grid Breakpoints
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <motion.div
                key={reactImage}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                style={{
                  width: isMobile ? "80%" : "60%", // Adjust image size for mobile
                  padding: "10px",
                }}
              >
                <img
                  src={reactImage}
                  alt="Random React Pic"
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "10px",
                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                  }}
                />
              </motion.div>
            </Grid>
          )}
        </Grid>
      </AnimatePresence>

      <motion.button
        onClick={getRandomImages}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "1rem",
          color: "#fff",
          backgroundColor: "#007BFF",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        Refresh
      </motion.button>
    </div>
  );
};

export default TodaysPic;
