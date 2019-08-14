import * as React from "react";
import classnames from "classnames";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import useLocalStorage from "../useLocalStorage";

interface Props {
  children: React.ReactNode;
}

export const DarkModeContext = React.createContext<[boolean, Function]>([
  false,
  (val: string) => {},
]);

export default function Layout({ children }: Props) {
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

  const className = classnames({
    "dark-mode": darkMode === "true",
  });

  return (
    <DarkModeContext.Provider value={[darkModeParsed, setDarkModeParsed]}>
      <div className={className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </DarkModeContext.Provider>
  );
}
