import { useState, useEffect } from "react"

type Breakpoints = "mobile" | "tablet"  | "desktop";

// Modified from: https://usehooks.com/useWindowSize/
export default function useBreakpoints(): Breakpoints {
  const isClient = typeof window === 'object';

  function getSize() {
    return {
      width: isClient ? window.innerWidth : 0,
      height: isClient ? window.innerHeight : 0
    };
  }

  function getBreakpoint() {
    const {width} = getSize()

    if (width < 768) {
      return "mobile";
    }

    if (width <= 1024) {
      return "tablet";
    }

    return "desktop";
  }

  const [breakpoint, setBreakpoint] = useState<Breakpoints>(getBreakpoint());

  useEffect(() => {
    if (!isClient) {
      return;
    }
    
    function handleResize() {
      setBreakpoint(getBreakpoint())
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return breakpoint;
}