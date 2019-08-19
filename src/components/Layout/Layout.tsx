import * as React from "react";
import classnames from "classnames";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { DarkModeContext } from "../DarkModeProvider/DarkModeProvider";

import styles from "./Layout.module.scss";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  const [darkMode] = React.useContext(DarkModeContext);

  const className = classnames(styles.layout, {
    "dark-mode": darkMode,
  });

  return (
    <div className={className}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
