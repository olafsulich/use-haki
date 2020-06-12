import { useEffect, useState } from 'react';

const usePageWidth = () => {
  const [pageWidth, setPageWidth] = useState<number>(window.innerWidth);

  const updateDimensions = () => {
    setPageWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, [pageWidth]);

  return pageWidth;
};

export default usePageWidth;
