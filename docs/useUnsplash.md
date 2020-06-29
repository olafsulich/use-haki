# `useUnsplash`

Tracks value of a boolean

## Usage

```jsx
import { useUnsplash } from 'use-haki';

const App = () => {
  const [randomImage, error] = useUnsplash();

  return <div>{!error && <img src={randomImage} alt="random image" />}</div>;
};
```

## Reference

```ts
const [randomImage, error] = useUnsplash({ user: 'bantersnaps', random: true, width: 1920, height: 1080 });
```

- **user** - get picture of a specific user
- **random** - specify if the picture need to be random (true by default)
- **width** - specify image width
- **height** - specify image height

### Returns

- **randomImage**
- **error**
