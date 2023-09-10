import { useEffect, useState } from "react";

export enum ResolutionType {
  small = "small",
  medium = "medium",
  large = "large",
}

function useResolution() {
  const [resolution, setResolution] = useState(ResolutionType.small);

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      if (width <= 400) {
        setResolution(ResolutionType.small);
      } else if (width <= 1360) {
        setResolution(ResolutionType.medium);
      } else {
        setResolution(ResolutionType.large);
      }
    }
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { resolution };
}

export default useResolution;
