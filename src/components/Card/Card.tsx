import * as React from "react";
import classnames from "classnames";

import InlineRow from "../InlineRow/InlineRow";
import Emoji from "../Emoji/Emoji";

import styles from "./Card.module.scss";

type LinksCallback = () => React.ReactNode;

interface Props {
  duration?: string;
  title?: string;
  titleBackground?: string;
  location?: string;
  children?: React.ReactNode;
  links?: LinksCallback;
}

export default function Card({
  duration,
  title,
  titleBackground,
  location,
  children,
  links,
}: Props) {
  return (
    <div className={styles.card}>
      {duration && (
        <span className={styles.duration}>
          {duration}
          <br />
        </span>
      )}
      {title && (
        <span
          className={classnames(styles.title, {
            [styles.hasBackground]: !!titleBackground,
          })}
          style={{ backgroundColor: titleBackground }}
        >
          {title}
          <br />
        </span>
      )}
      {location && (
        <span className={styles.location}>
          <Emoji emoji="📌" /> {location}
          <br />
        </span>
      )}
      <div className={styles.divider} />
      {children}
      {links && <InlineRow className={styles.links} spacing="small">{links()}</InlineRow>}
    </div>
  );
}
