# `useFetch`

Fetch request become easier with this hook

## Usage

```jsx
import { useFetch } from 'use-haki';

const App = () => {
  const { data, isLoading } = useFetch('https://randomuser.me/api/');

  return <>{isLoading ? <span>Loading...</span> : <pre>{JSON.stringify(data, null, 2)}</pre>}</>;
};
```

## Reference

```ts
const { data } = useFetch('path');
```

- **path** - path to your api

### Returns

- **isLoading**
- **isResolved**
- **isRejected**
- **status**
- **error**
- **data**
