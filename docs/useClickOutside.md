# `useClickOutside`

This hook allows you to detect clicks outside of a specified element.

## Usage

```jsx
import useClickOutside from 'use-haki';

const App = () => {
  const modalRef = useRef(null);
  const [isModalOpen, setModalOpen] = useState(false);
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
