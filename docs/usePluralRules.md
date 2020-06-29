# `usePluralRules`

Gives plural-sensitive formatting.

## Usage

```jsx
import { usePluralRules } from 'use-haki';

const App = () => {
  const pr1 = usePluralRules(1);
  const pr2 = usePluralRules(2);
  const pr3 = usePluralRules(3);

  return (
    <>
      <span>{pr1}</span> // 1st
      <span>{pr2}</span> // 2nd
      <span>{pr3}</span> // 3rd
    </>
  );
};
```

## Reference

```ts
const pr = usePluralRules(num: number);
```

For example, you pass in number `2`, then you get `2nd`, same situation with number `3`, you pass it in and get`3rd`.

Ordinals:

```js
const ordinals = {
  one: 'st',
  two: 'nd',
  few: 'rd',
  many: 'th',
  zer: 'th',
  other: 'th',
};
```

### Returns

- **pr**
