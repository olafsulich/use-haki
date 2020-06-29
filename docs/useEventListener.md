# `useEventListener`

Provide a declarative way for events listeners.

## Usage

```jsx
import { useEventListener } from 'use-haki';

const App = () => {
  useEventListener(document, 'click', (event) => console.log(event));
};
```

## Reference

```ts
useEventListener(element, eventName, handler);
```

- **element** - reference to element
- **eventName** - name of event, eg. 'click'
- **handler** - event listener callback
