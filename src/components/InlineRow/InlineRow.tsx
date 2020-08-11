import * as React from "react"
import cx from "clsx"

import styles from "./InlineRow.module.scss"

interface Props {
  children: React.ReactNode
  spacing?: "small" | "normal"
  className?: string
  style?: object
}

export default function InlineRow({
  children,
  spacing = "normal",
  className,
  style,
}: Props) {
  return (
    <div
      className={cx(
        styles.row,
        {
          [styles.spacingSmall]: spacing === "small",
          [styles.spacingNormal]: spacing === "normal",
        },
        className
      )}
      style={style}
    >
      {children}
    </div>
  )
}
