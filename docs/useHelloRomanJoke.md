# `useHelloRomanJoke`

Get random joke directly from [Hello Roman](https://www.youtube.com/channel/UCq8XmOMtrUCb8FcFHQEd8_g)

## Usage

```jsx
import { useHelloRomanJoke } from 'use-haki';

const App = () => {
  const { position, isResolved } = useHelloRomanJoke();

  return (
    <section>
      <h1>{randomQuestion}</h1>
      <p>{randomAnswer}</p>
    </section>
  );
};
```

## Reference

```ts
const [randomQuestion, randomAnswer] = useHelloRomanJoke();
```

### Returns

- **randomQuestion**
- **randomAnswer**
- **error**
