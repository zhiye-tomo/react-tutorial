import { useState, useCallback } from "react";
export const useInputArray = () => {
  const [text, setText] = useState();
  const [array, setArray] = useState([]);

  const handleAdd = useCallback(() => {
    setArray((prevArray) => {
      if (prevArray.some((item) => item === text)) {
        alert("同じ要素が既に存在します");
        return prevArray;
      }
      return [...prevArray, text];
    });
  }, [text]);

  const handleChange = useCallback((e) => {
    if (e.target.value.length > 5) {
      alert("五文字以内にしてください");
      return;
    }
    setText(e.target.value.trim());
  }, []);

  return { text, array, handleAdd, handleChange };
};
