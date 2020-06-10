import { useRef, useCallback, useEffect, useState } from 'react';

const useHover = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = useCallback(() => setIsHovered(true), []);
  const handleMouseOut = useCallback(() => setIsHovered(false), []);

  const ref = useRef<HTMLElement | null>(null);

  const callback = useCallback(
    (node) => {
      if (node) {
        node.removeEventListener('mouseover', handleMouseOver);
        node.removeEventListener('mouseout', handleMouseOut);
      }

      if (node) {
        node.addEventListener('mouseover', handleMouseOver);
        node.addEventListener('mouseout', handleMouseOut);
      }
    },
    [handleMouseOver, handleMouseOut],
  );

  useEffect(() => {
    callback(ref.current);
  }, [callback]);

  return [ref, isHovered];
};

export default useHover;
