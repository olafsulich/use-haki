import { useState, useEffect, MutableRefObject } from 'react';

const useIntersection = (ref: MutableRefObject<HTMLElement>, options: IntersectionObserverInit) => {
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.unobserve(ref.current);
    };
  }, [ref, options]);

  return isIntersecting;
};

export default useIntersection;
