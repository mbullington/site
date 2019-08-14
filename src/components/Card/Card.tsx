import * as React from "react";

import Emoji from "../Emoji/Emoji"

import styles from "./Card.module.scss";

type LinksCallback = () => React.ReactNode;

interface Props {
  duration?: string;
  title?: string;
  location?: string;
  children?: React.ReactNode;
  links?: LinksCallback;
}

export default function Card({
  duration,
  title,
  location,
  children,
  links,
}: Props) {
  return (
    <div className={styles.card}>
      {duration && <span className={styles.duration}>{duration}<br /></span>}
      {title && <span className={styles.title}>{title}</span>}
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
