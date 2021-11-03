import { useState, useEffect } from "react";

const useLocalStorage = (key, initialState) => {
  const [value, setValue] = useState(localStorage.getItem(key) || initialState);

  const removeItem = () => {
    localStorage.removeItem(key);
  };
  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);
  return [value, setValue, removeItem];
};

export default useLocalStorage;
