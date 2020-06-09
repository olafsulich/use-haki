import { useState, useCallback } from 'react';

type StorageError = null | Error;
type Key = string;
type SetValue = (value: StorageEvent) => void;
type DeleteItem = (key: Key) => void;

type LocalStorage = {
  (key: Key, initialValue: string): [string, SetValue, DeleteItem, StorageError];
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

  const deleteItem = useCallback(() => {
    try {
      window.localStorage.removeItem(key);
    } catch (error) {
      setError(error);
    }
  }, [key]);

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

  return [storedValue, setValue, deleteItem, error];
};

export default useLocalStorage;
