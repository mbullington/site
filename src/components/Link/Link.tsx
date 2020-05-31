import * as React from "react"
import classnames from "classnames";

import styles from "./Link.module.scss";

interface Props {
  children: React.ReactChild;
  href?: string;
  onClick?: any;
  plain?: boolean;
  disabled?: boolean;
}

export default function Link({ href, onClick, children, plain, disabled }: Props) {
  return <a className={classnames(styles.link, {
    [styles.plain]: plain,
    [styles.disabled]: disabled,
  })} href={href} onClick={onClick} target="_blank">{children}</a>
}