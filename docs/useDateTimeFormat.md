# `useDateTimeFormat`

Gives language-sensitive date and time formatting.

## Usage

```jsx
import { useDateTimeFormat } from 'use-haki';

const App = () => {
  const dateFormat = useDateTimeFormat('en-US', { dateStyle: 'full' });

  return <h1>Date: {dateFormat}</h1>;
};
```

## Reference

```ts
const dateFormat = useDateTimeFormat(locales: string | string[], options: Intl.DateTimeFormatOptions);
```

- **locales** - a string with a BCP 47 language tag, or an array of such strings, read more about `locales` in [documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat)
- **options** - an object with some [extra options](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat), eg. dateStyle,timeStyle,calendar

### Returns

- **dateFormat**
