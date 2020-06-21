import { useState, useCallback } from 'react';

const useToggle = (initialOn = false) => {
  const [on, setOn] = useState(initialOn);
  const toggle = useCallback(() => setOn((on) => !on), [on]);
  return { on, toggle };
};

export default useToggle;
