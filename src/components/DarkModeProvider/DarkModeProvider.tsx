import * as React from "react";
import classnames from "classnames";

import useLocalStorage from "../useLocalStorage";

type DarkMode = [boolean, Function];

export const FALLBACK_DARK_MODE: DarkMode = [false, () => {}];

export const DarkModeContext = React.createContext<DarkMode>(
  FALLBACK_DARK_MODE
);

interface Props {
  children: React.ReactNode;
}

export default function DarkModeProvider({ children }: Props) {
  const [darkMode, setDarkMode] = useDarkMode();
  const [fakeDarkMode, setFakeDarkMode] = React.useState(false);

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      setFakeDarkMode(darkMode);
    }, 0);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <DarkModeContext.Provider
      value={[
        fakeDarkMode,
        (val: boolean) => {
          setDarkMode(val);
          setFakeDarkMode(val);
        },
      ]}
    >
      <div
        className={classnames({
          "dark-mode": fakeDarkMode,
        })}
      >
        {children}
      </div>
    </DarkModeContext.Provider>
  );
}

function useDarkMode(): DarkMode {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", "false");

  const darkModeParsed = darkMode === "true" ? true : false;
  const setDarkModeParsed = (val: string | boolean) => {
    if (val === true || val === false) {
      setDarkMode(val.toString());
    }

    if (val === "true" || val === "false") {
      setDarkMode(val);
    }
  };

  return [darkModeParsed, setDarkModeParsed];
}
