import * as React from "react"
import classnames from "classnames"

import styles from "./Icon.module.scss"

interface Props {
  children: React.ReactNode;
}

export default function Icon({ children }: Props) {
  return <div className={styles.icon}>{children}</div>
}

interface FAProps {
  fa: string
}

export function FAS({ fa }: FAProps) {
  return <i className={classnames("fas", fa, styles.icon)} />
}

export function FAB({ fa }: FAProps) {
  return <i className={classnames("fab", fa, styles.icon)} />
}