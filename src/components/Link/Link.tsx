import * as React from "react"

import styles from "./Link.module.scss";

interface Props {
  children: React.ReactChild;
  href?: string;
  onClick?: any;
}

export default function Link({ href, onClick, children }: Props) {
  return <a className={styles.link} href={href} onClick={onClick} target="_blank">{children}</a>
}