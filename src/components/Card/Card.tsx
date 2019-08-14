import * as React from "react";
import classnames from "classnames";

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
        </span>
      )}
      {location && (
        <span className={styles.location}>
          <br />
          <Emoji emoji="📌" /> {location}
          <br />
          <br />
        </span>
      )}
      {children}
    </div>
  );
}
