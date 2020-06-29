# `useInterval`

Use interval in declarative way with this hook

## Usage

```jsx
import { useState } from 'react';
import { useInterval } from 'use-haki';

const App = () => {
  const [count, setCount] = useState();
  useInterval(() => {
    setCount(count + 1);
  }, 2);

  return (
    <section>
      <h1>Count: {count}</h1>
    </section>
  );
};
```

## Reference

```ts
useInterval(callback: () => void, delay: number);
```

- **callback** - a function to be executed every delay milliseconds.
- **delay** - The time, in milliseconds, the timer should delay in between executions of the specified function
