import * as React from "react"
import cx from "clsx"

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
        "row",
        {
          ["spacingSmall"]: spacing === "small",
          ["spacingNormal"]: spacing === "normal",
        },
        className
      )}
      style={style}
    >
      {children}
    </div>
  )
}
