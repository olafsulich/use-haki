import { useState, useEffect } from 'react';
import { errorMessage } from './helpers/errorMessages';

type Unsplash = {
  user?: string;
  random?: boolean;
  width?: number;
  height?: number;
};

const useUnsplash = ({ user, random = true, width, height }: Unsplash) => {
  const [randomImage, setRandomImage] = useState<string>();
  const [error, setError] = useState<string>();

  const fetchImage = async () => {
    try {
      const apiLink = `https://source.unsplash.com/${user ? `user/${user}` : random ? 'random' : null}/${
        width || height ? `${width}x${height}` : null
      }`;
      setRandomImage(apiLink);
    } catch {
      setError(errorMessage);
    }
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return [randomImage, error];
};

export default useUnsplash;
