# `useToggle`

Tracks value of a boolean

## Usage

```jsx
import { useToggle } from 'use-haki';

const App = () => {
  const { on, toggle } = useToggle();

  return (
    <div>
      <span>{on && 'Hi there 👋'}</span>
      <button onClick={toggle}>toggle me 👀</button>
    </div>
  );
};
```

## Reference

```ts
const { on, toggle } = useToggle(initialOn);
```

- **initialValue** - initialOn by default is false
- **on** - toggle state
- **toggle** - function that toggle `on` state

### Returns

- **toggle**
- **on**
