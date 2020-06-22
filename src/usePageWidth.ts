import { useEffect, useState, useCallback } from 'react';

const usePageWidth = () => {
  const [pageWidth, setPageWidth] = useState<number>(window.innerWidth);

  const updateDimensions = useCallback(() => {
    setPageWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, [updateDimensions]);

  return pageWidth;
};

export default usePageWidth;
