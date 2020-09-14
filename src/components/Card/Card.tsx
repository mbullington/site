import * as React from "react";
import cx from "clsx";

import InlineRow from "../InlineRow/InlineRow";
import Emoji from "../Emoji/Emoji";

import styles from "./Card.module.scss";

type LinksCallback = () => React.ReactNode;

interface Props {
  duration?: string;
  title?: string;
  titleBackground?: string;
  logo?: LinksCallback;
  logoBackground?: string;
  location?: string;
  children?: React.ReactNode;
  links?: LinksCallback;
}

export default function Card({
  duration,
  title,
  titleBackground,
  logo,
  logoBackground,
  location,
  children,
  links,
}: Props) {
  const hasLogo = !!logo && !!logoBackground;
  const hasBackground = !!titleBackground;
  const hasLinks = !!links;

  const cardClasses = cx(styles.card, {
    [styles.hasLogo]: hasLogo,
    [styles.hasLinks]: hasLinks,
  });

  const titleClasses = cx(styles.title, {
    [styles.hasBackground]: hasBackground,
  });

  return (
    <div className={cardClasses}>
      {duration && (
        <span className={styles.duration}>
          {duration}
          <br />
        </span>
      )}
      {!duration && <div className={styles.noDuration} />}
      {title && (
        <span
          className={titleClasses}
          style={{ backgroundColor: titleBackground }}
        >
          {hasBackground && `${title} `}
          {!hasBackground && title}
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
      {links && (
        <InlineRow className={styles.links} spacing="small">
          {links()}
        </InlineRow>
      )}
      {logo && (
        <div
          className={styles.logo}
          style={{ backgroundColor: logoBackground }}
        >
          {logo()}
        </div>
      )}
    </div>
  );
}
