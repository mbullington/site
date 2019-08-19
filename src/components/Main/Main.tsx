import * as React from "react";

import styles from "./Main.module.scss";

interface Props {
  children?: React.ReactNode;
}

export default function Main({ children }: Props) {
  return <main className={styles.main}>{children}</main>;
}
