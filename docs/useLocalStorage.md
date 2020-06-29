# `useLocalStorage`

Manage localStorage key with one simple hook

## Usage

```jsx
import { useLocalStorage } from 'use-haki';

const App = () => {
  const [storedValue, setValue, deleteItem] = useLocalStorage('apple');

  return (
    <section>
      {storedValue && <h1>{storedValue}</h1>}
      <label for="fruit">Name:</label>
      <input type="text" id="fruit" value={storedValue} onChange={(event) => setValue(event.target.value)} />
      <button onClick={() => deleteItem('apple')}>Delete {storedValue}</button>
    </section>
  );
};
```

## Reference

```ts
const [storedValue, setValue, deleteItem] = useLocalStorage('key');
```

- **key** - localStorage key to manage.
- **storedValue** - localStorage key value
- **setValue** - value setter
- **deleteItem** - delete value function, takes key as parameter

### Returns

- **storedValue**
- **setValue**
- **deleteItem**
- **error**
