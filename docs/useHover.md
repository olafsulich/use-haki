# `useHover`

Tracks your hover state on the specific element with this hook!

## Usage

```jsx
import { useHover } from 'use-haki';

const App = () => {
  const [ref, isHovered] = useHover();

  return (
    <section>
      <h1 ref={ref}>{isHover ? 'Hi there 👋' : 'Can someone hover me 😧?'}</h1>
    </section>
  );
};
```

## Reference

```ts
const [ref, isHovered] = useHover('path');
```

- **ref** - reference to element that need to be hover
- **isHovered** - hover state (true/false)

### Returns

- **ref**
- **isHovered**
