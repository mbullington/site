import * as React from "react";
import cx from "clsx";

import InlineRow from "./InlineRow";
import Emoji from "./Emoji";

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
  style?: any;
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
  style,
}: Props) {
  const hasLogo = !!logo && !!logoBackground;
  const hasBackground = !!titleBackground;
  const hasLinks = !!links;

  const cardClasses = cx("card", {
    ["hasLogo"]: hasLogo,
    ["hasLinks"]: hasLinks,
  });

  const titleClasses = cx("title", {
    ["hasBackground"]: hasBackground,
  });

  return (
    <div className={cardClasses} style={style}>
      {duration && (
        <span className={"duration"}>
          {duration}
          <br />
        </span>
      )}
      {!duration && <div className={"noDuration"} />}
      {title && (
        <span
          className={titleClasses}
          style={{ backgroundColor: `var(--${titleBackground})` }}
        >
          {hasBackground && `${title} `}
          {!hasBackground && title}
          <br />
        </span>
      )}
      {location && (
        <span className={"location"}>
          <Emoji emoji="📌" /> {location}
          <br />
        </span>
      )}
      <div className={"divider"} />
      {children}
      {links && (
        <InlineRow className={"links"} spacing="small">
          {links()}
        </InlineRow>
      )}
      {logo && (
        <div
          className={"logo"}
          style={{ backgroundColor: logoBackground }}
        >
          {logo()}
        </div>
      )}
    </div>
  );
}
