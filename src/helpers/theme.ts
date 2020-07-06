const preferDarkSchema = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const defaultTheme = preferDarkSchema ? 'dark' : 'light';

export { defaultTheme };
