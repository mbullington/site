import * as React from "react"
import cx from "clsx";

interface Props {
  children: React.ReactChild;
  href?: string;
  onClick?: any;
  plain?: boolean;
  disabled?: boolean;
}

export default function Link({ href, onClick, children, plain, disabled }: Props) {
  return <a className={cx("link", {
    ["plain"]: plain,
    ["disabled"]: disabled,
  })} href={href} onClick={onClick} target="_blank">{children}</a>
}
