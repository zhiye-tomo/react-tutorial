import { useState, useCallback } from "react";

export const useCounter = () => {
  const [count, setCount] = useState(1);
  const [isShow, setShow] = useState(true);

  const handleClick = useCallback(() => {
    console.log(count);
    if (count < 10) {
      setCount((prevValue) => prevValue + 1);
    }
  }, [count]);

  const handleDisplay = useCallback(() => {
    setShow((isShow) => !isShow);
  }, []);

  return { count, isShow, handleClick, handleDisplay };
};
