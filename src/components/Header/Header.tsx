import * as React from "react";
import classnames from "classnames";

import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import Socials from "../Socials/Socials";

import InlineRow from "../InlineRow/InlineRow";
import Link from "../Link/Link";
import Emoji from "../Emoji/Emoji";

import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="columns">
        <div className={classnames(styles.column, "column is-5 is-offset-one-third")}>
          <DarkModeToggle className={styles.darkModeToggle} />

          <p className={styles.title}>
            Hello — I'm Michael. I work on web at{" "}
            <a className={styles.linkDJI}>DJI</a>.
          </p>

          <InlineRow spacing="small" className={styles.attrs}>
            <span>20 y/o</span>
            <Emoji emoji="🇺🇸" />
            <span>PSU '21</span>
            <Emoji emoji="🎓" />
            <code className={styles.code}>"part-time" | "remote" | "intern"</code>
          </InlineRow>

          <p className={styles.text}>
            I'm a software developer who's passionate about building user
            interfaces. I build experiences for the web, mobile, and cloud. I
            have deep knowledge of client-side <b>JavaScript</b> architecture, mapping technologies like <b>Mapbox</b>, and am
            currently excited by <b>Flutter</b>. Fan of work travel. 😉
            <br />
            <br />
            I'm also a college student, and create projects for the open source
            community.
            <br />
            <br />
            <Link href="#scroll-work">SEE BELOW</Link>
          </p>

          <Socials />
        </div>
      </div>
    </header>
  );
}
