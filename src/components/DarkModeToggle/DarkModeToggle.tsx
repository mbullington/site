// Huge thanks to @narative/gatsby-theme-novela for DarkModeToggle
// and the cool animation.
//
// https://github.com/narative/gatsby-theme-novela/blob/master/%40narative/gatsby-theme-novela/src/components/Navigation/Navigation.Header.tsx#L276

import * as React from "react";
import cx from "clsx";
import useScrollPosition from "@react-hook/window-scroll";

import Icon from "../Icon/Icon";

import {
  DarkModeContext,
  FALLBACK_DARK_MODE,
} from "../DarkModeProvider/DarkModeProvider";

import styles from "./DarkModeToggle.module.scss";

const easeInQuad = (t: number): number => t * t;

interface Props {
  className?: string;
}

export default function DarkModeToggle({ className }: Props) {
  // This should be okay for React Hooks since its based on a static ENV.
  let opacity = 1.0;
  let pointerEvents: "auto" | "none" = "auto";
  if (typeof window !== "undefined") {
    const scrollY = useScrollPosition();
    // Corresponds with Header.module.scss.
    const max = window.innerHeight * 0.9;

    opacity = easeInQuad(1.0 - Math.min(scrollY, max) / max);
    if (scrollY >= max) {
      pointerEvents = "none";
    }
  }

  const context = React.useContext(DarkModeContext) || FALLBACK_DARK_MODE;

  // Don't display toggle.
  if (context === FALLBACK_DARK_MODE) {
    return <></>;
  }

  const [darkMode, setDarkMode] = context;

  return (
    <div
      className={cx(styles.darkModeToggle, className)}
      onClick={() => setDarkMode(!darkMode)}
      style={{ opacity, pointerEvents }}
    >
      <Icon>
        <div className={styles.moonOrSun} />
        <div className={styles.mask} />
      </Icon>
    </div>
  );
}
