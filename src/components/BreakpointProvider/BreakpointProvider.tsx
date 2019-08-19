import * as React from "react";

type Breakpoint = "mobile" | "tablet" | "desktop";

export const BreakpointContext = React.createContext<Breakpoint>("desktop");

interface Props {
  children?: React.ReactNode;
}

export default function BreakpointProvider({ children }: Props) {
  const breakpoint = useBreakpoint("desktop");

  return (
    <BreakpointContext.Provider value={breakpoint}>
      {children}
    </BreakpointContext.Provider>
  );
}

// Modified from: https://usehooks.com/useWindowSize/
function useBreakpoint(defaultValue: Breakpoint): Breakpoint {
  const isClient = typeof window === "object";

  function getBreakpoint() {
    if (!isClient) {
      return defaultValue;
    }

    const width = window.innerWidth;

    // Deviates slightly from Bulma to allow for better iPad support.
    if (width < 768) {
      return "mobile";
    }

    if (width <= 1024) {
      return "tablet";
    }

    return "desktop";
  }

  const [breakpoint, setBreakpoint] = React.useState<Breakpoint>(getBreakpoint);

  React.useEffect(() => {
    if (!isClient) {
      return;
    }

    function handleResize() {
      setBreakpoint(getBreakpoint());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return breakpoint;
}
