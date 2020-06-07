import { useState, useEffect } from 'react';
import createActivityDetector, {
  ActivityDetectorOptions
} from 'activity-detector';

const useIdle = (options: ActivityDetectorOptions) => {
  const [isIdle, setIsIdle] = useState(false);
  useEffect(() => {
    const activityDetector = createActivityDetector(options);
    activityDetector.on('idle', () => setIsIdle(true));
    activityDetector.on('active', () => setIsIdle(false));
    return () => activityDetector.stop();
  }, []);
  return isIdle;
};

export default useIdle;
