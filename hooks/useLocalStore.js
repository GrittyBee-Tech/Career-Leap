import { useState, useEffect } from "react";

const useLocalStore = (key, defaultValue) => {
  const jsonValue = window.localStorage.getItem(key);

  const [value, setValue] = useState(() => {
    if (jsonValue != null) return JSON.parse(jsonValue).accesToken;

    if (typeof defaultValue === "function") {
      return defaultValue();
    }

    return defaultValue;
  });

  useEffect(() => {
    if (jsonValue != null) {
      const val = JSON.parse(jsonValue);
      const obj = {
        ...val, accessToken: value
      };
      window.localStorage.setItem(key, JSON.stringify(obj));
    }
  }, [key, value, jsonValue]);

  return [value, setValue];
};

export default useLocalStore;
