import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Button,
  Switch,
  FormControlLabel,
} from "@mui/material";
import { Link } from "react-router-dom";
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  Home,
  Code,
  HelpOutline,
  Brightness4,
  Brightness7,
} from "@mui/icons-material";
import { motion } from "framer-motion";

const MyNavbar = () => {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  const menuItems = [
    { text: "Home", icon: <Home />, path: "/" },
    { text: "Topics", icon: <Code />, path: "/topics" },
    { text: "Todays Pic", icon: <HelpOutline />, path: "/todays-pic" },
    {
      text: "Problem of the Day",
      icon: <Code />,
      path: "/problem-of-the-Day",
      special: true,
    },
  ];

  return (
    <AppBar
      position="sticky"
      sx={{
        bgcolor: "var(--primary-bg)",
        padding: "10px 0",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
      }}
    >
      <Toolbar>
        {/* Left Side: Menu Button for Mobile */}
        <IconButton
          edge="start"
          color="inherit"
          onClick={toggleDrawer(true)}
          sx={{ display: { xs: "block", md: "none" } }}
        >
          <MenuIcon fontSize="large" sx={{ color: "var(--primary-text)" }} />
        </IconButton>

        {/* Center: Title */}
        <Typography
          component={motion.div}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          variant="h6"
          sx={{
            flexGrow: 1,
            textAlign: { xs: "center", md: "left" },
            fontWeight: "bold",
            letterSpacing: 1,
            color: "var(--primary-text)",
          }}
        >
          Interview Prep
        </Typography>

        {/* Right Side: Desktop Menu */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          {menuItems.map((item, index) => (
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              key={index}
            >
              <Link to={item.path} style={{ textDecoration: "none" }}>
                <Button
                  variant={item.special ? "contained" : "text"}
                  sx={{
                    bgcolor: item.special
                      ? "var(--accent-color)"
                      : "transparent",
                    color: "var(--primary-text)",
                  }}
                >
                  {item.text}
                </Button>
              </Link>
            </motion.div>
          ))}
        </Box>

        {/* Theme Toggle Button */}
        <FormControlLabel
          control={
            <Switch
              checked={theme === "dark"}
              onChange={() => setTheme(theme === "light" ? "dark" : "light")}
              icon={<Brightness7 />}
              checkedIcon={<Brightness4 />}
              sx={{ ml: 2 }}
            />
          }
          label=""
        />
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 250,
            p: 2,
            textAlign: "center",
            bgcolor: "var(--secondary-bg)",
            height: "100vh",
          }}
        >
          <IconButton
            onClick={toggleDrawer(false)}
            sx={{ float: "right", color: "var(--primary-text)" }}
          >
            <CloseIcon />
          </IconButton>
          <Typography
            variant="h6"
            sx={{ mt: 2, fontWeight: "bold", color: "var(--primary-text)" }}
          >
            Menu
          </Typography>
          <List>
            {menuItems.map((item, index) => (
              <ListItem key={index} button component={Link} to={item.path}>
                <ListItemText
                  primary={item.text}
                  sx={{
                    color: item.special
                      ? "var(--accent-color)"
                      : "var(--primary-text)",
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default MyNavbar;
