# `useKeyPress`

Detects when the user is pressing a specific key on their keyboard

## Usage

```jsx
import { useKeyPress } from 'use-haki';

const App = () => {
  const keyPressed = useKeyPress('f');

  return (
    <section>
      <h1>{keyPressed && 'Hi there 👋'}</h1>
    </section>
  );
};
```

## Reference

```ts
const keyPressed = useKeyPress('targetKey');
```

- **targetKey** - name of specific key, like: 'f', 'q', 'Enter'

### Returns

- **keyPressed** - boolean, thats tells you is user press specific key
