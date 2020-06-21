import { useState, useEffect, useCallback } from 'react';

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState<number | null>(null);

  const handleScroll = useCallback(() => setScrollPosition(window.scrollY), [scrollPosition]);

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollPosition;
};
export default useScrollPosition;
