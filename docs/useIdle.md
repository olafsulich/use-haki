# `useIdle`

This hook helps you detecting when the user becomes idle (does not interact with the page for some time) or active in your page.

Hook use [activity-detector](https://github.com/tuenti/activity-detector) library.

## Usage

```jsx
import { useIdle } from 'use-haki';

const App = () => {
  const isIdle = useIdle({ timeToIdle: 1000 });

  return (
    <section>
      <h1>{isIdle ? 'Are you still there? 👀' : 'Hi there 👋'}</h1>
    </section>
  );
};
```

## Reference

```ts
const isIdle = useIdle(options);
```

- **isIdle** - gives boolean, idle state
- **options** - provide some extra [options](https://github.com/tuenti/activity-detector#advanced-options) for idle state

### Returns

- **isIdle**
