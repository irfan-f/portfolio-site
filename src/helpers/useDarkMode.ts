import React, { useState, useEffect } from 'react';

// Custom hook to manage theme
const useDarkMode = () => {
  // Get the theme from local storage or default to auto
  const [darkMode, setDarkMode]: [
    darkMode: boolean,
    toggleDarkMode: React.Dispatch<boolean>,
  ] = useState(
    localStorage.darkMode ||
      window.matchMedia('(prefers-color-scheme: dark)').matches,
  );

  // Initial toggle to match theme
  if (darkMode) {
    document.documentElement.classList.toggle('dark', true);
  }

  // Function to toggle theme on demand
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark', !darkMode);
    // Set the theme and save it to local storage
    localStorage.darkMode = !darkMode;
    setDarkMode(!darkMode);
  };

  return { darkMode, toggleDarkMode };
};

export default useDarkMode;
