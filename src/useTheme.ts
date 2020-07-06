import { useState, useLayoutEffect } from 'react';
import { defaultTheme } from './helpers/theme';

const useTheme = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || defaultTheme);

  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return [theme, setTheme];
};

export default useTheme;
