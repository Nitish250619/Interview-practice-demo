import React, { useEffect, useState } from "react";
import { Switch, FormControlLabel } from "@mui/material";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <FormControlLabel
      control={
        <Switch
          checked={theme === "dark"}
          onChange={() => setTheme(theme === "light" ? "dark" : "light")}
          color="default"
        />
      }
      label={theme === "light" ? "☀️ Light Mode" : "🌙 Dark Mode"}
    />
  );
};

export default ThemeToggle;
