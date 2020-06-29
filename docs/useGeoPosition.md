# `useGeoPosition`

Hook that tracks user geographic location

## Usage

```jsx
import { useGeoPosition } from 'use-haki';

const App = () => {
  const { position, isResolved } = useGeoPosition();

  return (
    <section>
      <h1>My position:</h1>
      {isResolved && <p>longitude: {position.cords.longitude}</p>}
      {isResolved && <p>latitude: {position.cords.latitude}</p>}
      {isResolved && <p>latitude: {position.cords.timestamp}</p>}
    </section>
  );
};
```

## Reference

```ts
const { isResolved, position } = useGeoPosition();
```

### Returns

- **isLoading**
- **isResolved**
- **isRejected**
- **status**
- **error**
- **position** - gives [GeolocationPosition](https://developer.mozilla.org/en-US/docs/Web/API/GeolocationPosition) interface with cords and timestamp
