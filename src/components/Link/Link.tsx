import * as React from "react"
import cx from "clsx";
import { Link as OriginalGatsbyLink } from "gatsby";

import styles from "./Link.module.scss";

interface Props {
  children: React.ReactChild;
  href?: string;
  onClick?: any;
  plain?: boolean;
  disabled?: boolean;
}

export default function Link({ href, onClick, children, plain, disabled }: Props) {
  return <a className={cx(styles.link, {
    [styles.plain]: plain,
    [styles.disabled]: disabled,
  })} href={href} onClick={onClick} target="_blank">{children}</a>
}

export function GatsbyLink({ href = '', onClick, children, plain, disabled }: Props) {
  return <OriginalGatsbyLink className={cx(styles.link, {
    [styles.plain]: plain,
    [styles.disabled]: disabled,
  })} to={href} onClick={onClick} target="_blank">{children}</OriginalGatsbyLink>
}