import React, { useState } from 'react';
import { 
  Accordion, 
  AccordionSummary, 
  AccordionDetails, 
  Typography, 
  Container, 
  Grid, 
  useMediaQuery, 
  useTheme 
} from '@mui/material';
import { motion } from 'framer-motion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import machine_coding_question from "../../Jsons/machine_coding_question.json"; // Import JSON correctly

const MachineCodingRound = () => {
  const [expanded, setExpanded] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Detects mobile screens
  const questions = machine_coding_question.questions;

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{ 
        padding: isMobile ? '10px' : '20px', 
        minHeight: "100vh",
        backgroundColor: "black", 
      }}
    >
      <Container maxWidth="md">
        <Typography 
          variant={isMobile ? "h5" : "h4"} 
          gutterBottom 
          align="center"
          style={{ 
            fontWeight: "bold", 
            marginBottom: isMobile ? "15px" : "30px",
            color: theme.palette.text.primary 
          }}
        >
          React Machine Coding Round Questions
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {questions.map((q) => (
            <Grid item xs={12} key={q.id}>
              <Accordion
                expanded={expanded === q.id}
                onChange={handleChange(q.id)}
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{ 
                  borderRadius: "12px", 
                  overflow: "hidden", 
                  boxShadow: theme.shadows[3],
                  '&:hover': {
                    boxShadow: theme.shadows[6]
                  }
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${q.id}-content`}
                  id={`panel${q.id}-header`}
                  style={{ 
                    backgroundColor: theme.palette.primary.light,
                    color: theme.palette.primary.contrastText
                  }}
                >
                  <Typography variant={isMobile ? "body1" : "h6"} style={{ fontWeight: "bold" }}>
                    {q.title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails style={{ padding: isMobile ? '10px' : '20px' }}>
                  <Typography 
                    variant="body1" 
                    style={{ 
                      marginBottom: '15px', 
                      color: theme.palette.text.secondary 
                    }}
                  >
                    {q.description}
                  </Typography>
                  <Typography 
                    component="pre" 
                    style={{ 
                      backgroundColor: theme.palette.grey[100], 
                      padding: '15px', 
                      borderRadius: '8px', 
                      whiteSpace: "pre-wrap", 
                      wordBreak: "break-word",
                      fontSize: isMobile ? '12px' : '14px',
                      fontFamily: 'monospace',
                      color: theme.palette.text.primary
                    }}
                  >
                    {q.solution}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
          ))}
        </Grid>
      </Container>
    </motion.div>
  );
};

export default MachineCodingRound;