# `useMousePosition`

Simple hook that tracks mouse position on the screen

## Usage

```jsx
import { useMousePosition } from 'use-haki';

const App = () => {
  const { posX, posY } = useMousePosition();

  return (
    <div>
      <span>mouse X position: {posX}</span>
      <span>mouse Y position: {posY}</span>
    </div>
  );
};
```

## Reference

```ts
const { posX, posY } = useMousePosition();
```

- **posX** - gives X mouse position
- **posY** - gives Y mouse position

### Returns

- **posX**
- **posY**
