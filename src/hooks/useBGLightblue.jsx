import { useEffect } from "react";

export const useBGLightblue = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
};
