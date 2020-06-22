import { useState, useEffect, MutableRefObject } from 'react';

const useIntersection = (ref: MutableRefObject<HTMLElement>, options: IntersectionObserverInit) => {
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([{ isIntersecting }]) => {
      setIntersecting(isIntersecting);
    }, options);

    const currentRf = ref.current;

    observer.observe(currentRf);

    return () => {
      observer.unobserve(currentRf);
    };
  }, [ref, options]);

  return isIntersecting;
};

export default useIntersection;
