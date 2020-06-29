# `useScrollPosition`

Simple hook that tracks scroll position

## Usage

```jsx
import { useScrollPosition } from 'use-haki';

const App = () => {
  const scrollPosition = useScrollPosition();

  return (
    <div>
      <span>scroll position: {scrollPosition}</span>
    </div>
  );
};
```

## Reference

```ts
const scrollPosition = useScrollPosition();
```

- **scrollPosition** - gives scroll position

### Returns

- **scrollPosition**
