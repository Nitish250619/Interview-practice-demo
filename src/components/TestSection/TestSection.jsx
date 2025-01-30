import React, { useEffect, useState } from 'react';
import TestCard from './TestCard';
import img1 from "../../assets/12290877_Wavy_Tech-09_Single-08.svg";
import img2 from "../../assets/pngwing.com.png";
import img3 from "../../assets/pngwing.com.png"; // Replace with any image
import { Box, Grid } from '@mui/material';

const testData = [
  {
    title: 'JavaScript Quiz',
    description: 'Test your knowledge on JavaScript fundamentals',
    image: img1,
    path: "/quiz/javascript" // Add path for JavaScript quiz
  },
  {
    title: 'React.js Challenge',
    description: 'Test your React skills with a challenging quiz',
    image: img2,
    path: "/quiz/react" // Add path for React quiz
  },
  {
    title: 'Algorithms Test',
    description: 'Evaluate your problem-solving skills in algorithms',
    image: img3,
    path: "/quiz/algorithms" // Add path for Algorithms quiz
  },
];

const TestSection = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setTheme(document.documentElement.getAttribute("data-theme"));
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  return (
    <Box sx={{ my: "80px" }}>
      <Grid container spacing={4} justifyContent="center">
        {testData.map((data, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <TestCard 
              title={data.title}
              description={data.description}
              image={data.image}
              theme={theme} // Pass the theme as a prop to TestCard
              path={data.path} // Pass path to navigate to quiz page
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TestSection;
