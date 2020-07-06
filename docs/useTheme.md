# `useTheme`

This hook helps you implement light/dark mode in your app, based on prefers-color-scheme and localStorage.

## Usage

Component:

```jsx
import { useTheme } from 'use-haki';

const App = () => {
  const [theme, setTheme] = useTheme();

  return (
      <section>
      <h2>Current theme: {theme}</h2>
      <button onClick={() => setTheme('dark')}>Set dark theme<button>
      <button onClick={() => setTheme('light')}>Set light theme<button>
      <section />
  )
};
```

CSS:

```css
html[data-theme='dark'] {
  --text-color: #f0f0f0;
  --background-body: #1c1c1c;
  --other-var: #111111;
}

html[data-theme='light'] {
  --text-color: #111111;
  --background-body: #fafafa;
  --other-var: #ffffff;
}

body {
  color: var(--text-color);
  background-color: var(--background-body);
}
```

## Reference

```ts
const [theme, setTheme] = useTheme();
```

- **theme** - current theme, based on prefers-color-scheme
- **setTheme** - function that set theme
