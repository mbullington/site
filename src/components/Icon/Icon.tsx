import * as React from "react"
import classnames from "classnames"

import styles from "./Icon.module.scss"

interface Props {
  children: React.ReactNode;
}

export default function Icon({ children }: Props) {
  return <div className={styles.icon}>{children}</div>
}

interface FABProps {
  fa: string
}

export function FAB({ fa }: FABProps) {
  return <i className={classnames("fab", fa, styles.icon)} />
}