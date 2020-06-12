import { useEffect, useState, useCallback } from 'react';

type MousePosition = {
  posX: null | number;
  posY: null | number;
};

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    posX: null,
    posY: null,
  });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({
      posX: e.pageX,
      posY: e.pageY,
    });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return mousePosition;
};

export default useMousePosition;
