import React from "react";
import Toggle from "react-toggle";

import clsx from "clsx";
import useScrollPosition from "@react-hook/window-scroll";

import {
  DarkModeContext,
  FALLBACK_DARK_MODE,
} from "../DarkModeProvider/DarkModeProvider";

import styles from "./DarkModeToggle.module.scss";

const easeInQuad = (t: number): number => t * t;

interface Props {
  className?: string;
}

interface ColorProps {
  icon: React.ReactNode;
}

const Dark = ({ icon }: ColorProps) => (
  <span className={clsx(styles.toggle, styles.dark)}>{icon}</span>
);
const Light = ({ icon }: ColorProps) => (
  <span className={clsx(styles.toggle, styles.light)}>{icon}</span>
);

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
    <div style={{ opacity, pointerEvents }}>
      <Toggle
        checked={darkMode}
        onChange={() => setDarkMode(!darkMode)}
        icons={{
          checked: <Dark icon="🌜" />,
          unchecked: <Light icon="🌞" />,
        }}
      />
    </div>
  );
}
