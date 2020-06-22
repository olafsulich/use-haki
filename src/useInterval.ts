import { useEffect } from 'react';

type Interval = {
  (callback: () => void, delay: number): void;
};

const useInterval: Interval = (callback, delay) => {
  useEffect(() => {
    const id = setInterval(callback, delay);
    return () => clearInterval(id);
  }, [delay, callback]);
};

export default useInterval;
