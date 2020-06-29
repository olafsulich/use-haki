# `useIntersection`

Observe changes in the intersection of a target element with an ancestor element or with a top-level document's viewport.

## Usage

```jsx
import { useRef } from 'react';
import { useIntersection } from 'use-haki';

const App = () => {
  const ref = useRef();
  const isOnScreen = useIntersection(ref, {
    rootMargin: '-300px',
  });

  return <span ref={ref}>{isOnScreen ? 'Hey there 👋' : 'Bye 😩'}</span>;
};
```

## Reference

```ts
const isOnScreen = useIntersection(ref: MutableRefObject<HTMLElement>, options: IntersectionObserverInit);
```

- **isOnScreen** - gives information about visibility of a specific element (ref)
- **ref** - element that you want to observe
- **options** - [IntersectionObserver options](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

### Returns

- **isOnScreen**
