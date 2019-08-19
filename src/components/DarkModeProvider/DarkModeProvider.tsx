import * as React from "react";

import useLocalStorage from "../useLocalStorage";

type DarkMode = [boolean, Function];

export const DarkModeContext = React.createContext<DarkMode>([false, () => {}]);

interface Props {
  children: React.ReactNode;
}

export default function DarkModeProvider({ children }: Props) {
  const [darkMode, setDarkMode] = useDarkMode()

  return (
    <DarkModeContext.Provider value={[darkMode, setDarkMode]}>
      {children}
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
