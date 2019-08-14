import * as React from "react"
import classnames from "classnames"

import styles from "./InlineRow.module.scss"

interface Props {
  children: React.ReactNode
  spacing?: "small" | "normal"
  className?: string
}

export default function InlineRow({
  children,
  spacing = "normal",
  className,
}: Props) {
  return (
    <div
      className={classnames(
        styles.row,
        {
          [styles.spacingSmall]: spacing === "small",
          [styles.spacingNormal]: spacing === "normal",
        },
        className
      )}
    >
      {children}
    </div>
  )
}
