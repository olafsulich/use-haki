import { useState, useEffect, useCallback } from 'react';

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(window.scrollY);

  const handleScroll = useCallback(() => setScrollPosition(window.scrollY), []);

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return scrollPosition;
};
export default useScrollPosition;
