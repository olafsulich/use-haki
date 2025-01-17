# `useClickOutside`

This hook allows you to detect clicks outside of a specified element.

## Usage

```jsx
import { useClickOutside } from 'use-haki';

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const modalRef = useRef(null);
  useClickOutside(modalRef, () => setModalOpen(false));
  return (
    <>
      {isModalOpen ? (
        <div className="modal" ref={modalRef}>
          Hey there 👋
        </div>
      ) : (
        <button onClick={() => setModalOpen(true)}>Open me!</button>
      )}
    </>
  );
};
```

## Reference

```ts
useClickOutSide(ref: RefObject<HTMLElement>, handler: (event: Event) => void);
```

- **ref** - reference to element
- **handler** - action, when user click outside of element
