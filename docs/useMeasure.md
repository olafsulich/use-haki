# `useMeasure`

Returns the size of an element and its position relative to the viewport.

## Usage

```jsx
import { useMeasure } from 'use-haki';

const App = () => {
  const [rect, rectRef] = useMeasure();

  return <pre ref={rectRef}>{JSON.stringify(rect, null, 2)}</pre>;
};
```

## Reference

```ts
const [rect, rectRef] = useMeasure();
```

- **rect** - [DOMRect](https://developer.mozilla.org/en-US/docs/Web/API/DOMRect) object with properties like `width`,`height`,`x`,`y`...
- **rectRef** - element that you want to grab

### Returns

- **rectRef**
- **rect**
