import * as React from "react"

import styles from "./Link.module.scss";

interface Props {
  children: React.ReactChild;
  href: string;
}

export default function Link({ href, children }: Props) {
  return <a className={styles.link} href={href} target="_blank">{children}</a>
}