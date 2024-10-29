import { useEffect, useState } from "react";
export const useBreakPoints = () => {
  const [breakPoints, setBreakPoints] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setBreakPoints(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return breakPoints;
};
