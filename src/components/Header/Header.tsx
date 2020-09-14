import * as React from "react";
import useScrollPosition from "@react-hook/window-scroll";
import scrollToWithAnimation from "scrollto-with-animation";

// import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import InlineRow from "../InlineRow/InlineRow";
import Link from "../Link/Link";

import styles from "./Header.module.scss";

// Gets offset in container from DOM.
function getOffset(id: string): number {
  return (document.querySelector(`#${id}`) as any)?.offsetTop;
}

function scrollTo(id?: string) {
  const finalY = id
    ? window.innerHeight + getOffset(id) - window.innerHeight * 0.1
    : 0;

  scrollToWithAnimation(
    document.scrollingElement || document.documentElement,
    "scrollTop",
    finalY,
    1500,
    "easeInOutCirc"
  );
}

const OPEN_SOURCE = "open-source";
const WORK_EXPERIENCE = "work-experience";
const PROJECTS = "projects";

export default function Header() {
  let scrollY = 0;
  let innerHeight = 0;
  // This should be okay for React Hooks since its based on a static ENV.
  if (typeof window !== "undefined") {
    scrollY = useScrollPosition(15);
    innerHeight = window.innerHeight;
  }

  let currentPos = "";
  if (typeof document !== "undefined") {
    // Value for comparison with some leadway.
    const scrollYComp = scrollY - innerHeight + innerHeight * 0.2;

    if (scrollYComp >= getOffset(OPEN_SOURCE)) {
      currentPos = OPEN_SOURCE;
    } else if (scrollYComp >= getOffset(WORK_EXPERIENCE)) {
      currentPos = WORK_EXPERIENCE;
    } else if (scrollYComp >= getOffset(PROJECTS)) {
      currentPos = PROJECTS;
    }
  }

  return (
    <InlineRow className={styles.header}>
      <div className={styles.title} onClick={() => scrollTo()}>
        ⌘ bullington.xyz
      </div>
      <div className={styles.expanded} />
      {/* <DarkModeToggle /> */}
      <InlineRow className={styles.nav}>
        <Link
          plain
          disabled={currentPos === PROJECTS}
          onClick={() => scrollTo(PROJECTS)}
        >
          Projects
        </Link>
        <Link
          plain
          disabled={currentPos === WORK_EXPERIENCE}
          onClick={() => scrollTo(WORK_EXPERIENCE)}
        >
          Work Experience
        </Link>
        <Link
          plain
          disabled={currentPos === OPEN_SOURCE}
          onClick={() => scrollTo(OPEN_SOURCE)}
        >
          Open Source
        </Link>
      </InlineRow>
    </InlineRow>
  );
}
