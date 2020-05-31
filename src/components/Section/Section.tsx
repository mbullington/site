import * as React from "react";

import styles from "./Section.module.scss";

interface Props {
  title: String;
  children?: React.ReactNode;
  id?: string;
}

export default function Section({ title, children, id }: Props) {
  return (
    <section className={styles.section} id={id}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </section>
  )
}