import React, { useState, useEffect } from 'react';

export type ThemeType = 'light' | 'dark' | 'auto';

// Custom hook to manage theme
const useTheme = () => {
  // Get the theme from local storage or default to auto
  const [theme, setTheme]: [theme: ThemeType, setTheme: React.Dispatch<ThemeType>] = useState(localStorage.theme || 'auto');

  // Function to apply the theme
  const applyTheme = (theme: ThemeType) => {
    // If theme is auto, check system preference
    if (theme === 'auto') {
      const mode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      document.documentElement.classList.toggle('dark', mode === 'dark');
    } else {
      document.documentElement.classList.toggle('dark', theme === 'dark');
    }
    // Set the theme and save it to local storage
    localStorage.theme = theme;
    setTheme(theme);
  };

  // On initial render, check for system preference and apply theme
  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');

    // Function to handle theme change of User's system preference
    const handleThemeChange = (e: MediaQueryListEvent) => {
      // If theme is auto, apply the theme to match system preference
      if (theme === 'auto') {
        applyTheme('auto');
      }
    };

    // Apply initial theme
    applyTheme(theme);

    // Listen for changes in system preference
    prefersDarkMode.addEventListener('change', handleThemeChange);

    // Cleanup function to remove the event listener
    return () => {
      prefersDarkMode.removeEventListener('change', handleThemeChange);
    };
  }, [theme]);

  return { theme, applyTheme };
};

export default useTheme;