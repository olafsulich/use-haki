import { useCallback, useState } from 'react';

const useMeasure = () => {
  const [rect, setRect] = useState({});

  const ref = useCallback((node: HTMLElement) => {
    if (node) {
      setRect(node.getBoundingClientRect());
    }
  }, []);

  return [rect, ref];
};

export default useMeasure;
