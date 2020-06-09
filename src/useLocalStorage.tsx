import { useState, useCallback } from 'react';

type StorageError = null | Error;

type SetValue = {
  (value: StorageEvent): void;
};

type LocalStorage = {
  (key: string, initialValue: string): [string, SetValue, StorageError];
};

const useLocalStorage: LocalStorage = (key, initialValue = '') => {
  const [error, setError] = useState<StorageError>(null);
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      setError(error);
      return initialValue;
    }
  });

  const isFnInstance = useCallback(
    (value: StorageEvent) => {
      if (value instanceof Function) {
        return value(storedValue);
      }
      return value;
    },
    [storedValue],
  );

  const setValue: SetValue = useCallback(
    (value) => {
      try {
        const valueToStore = isFnInstance(value);
        setStoredValue(valueToStore);
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (error) {
        setError(error);
      }
    },
    [key, isFnInstance],
  );

  return [storedValue, setValue, error];
};

export default useLocalStorage;
