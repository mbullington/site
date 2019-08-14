import * as React from "react";

import styles from "./Section.module.scss";

interface Props {
  title: String;
  children?: React.ReactNode;
}

export default function Section({ title, children }: Props) {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </section>
  )
}