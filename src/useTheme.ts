import { useState, useLayoutEffect } from 'react';

const preferDarkSchema = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const defaultTheme = preferDarkSchema ? 'dark' : 'light';

const useTheme = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || defaultTheme);

  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return [theme, setTheme];
};

export default useTheme;
