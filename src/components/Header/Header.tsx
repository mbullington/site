import * as React from "react";
import classnames from "classnames";

import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import InlineRow from "../InlineRow/InlineRow";
import Link from "../Link/Link";
import Emoji from "../Emoji/Emoji";
import { FAB } from "../Icon/Icon";

import styles from "./Header.module.scss";

export default function Header() {
  return (
    <div className={styles.header}>
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
            <span style={{ flex: 1 }} />
          </InlineRow>

          <p className={styles.text}>
            I'm a software developer who's passionate about building user
            interfaces. I build experiences for the web, mobile, and cloud. I
            have deep knowledge of mapping technologies like <b>Mapbox</b>, and am
            currently excited by <b>Flutter</b>.
            <br />
            <br />
            I'm also a college student, and create projects for the open source
            community.
            <br />
            <br />
            <Link href="#scroll-work">SEE BELOW</Link>
          </p>

          <InlineRow spacing="small" className={styles.bold}>
            <a href="https://www.linkedin.com/in/michael-bullington-617a67b8/">
              <FAB fa="fa-linkedin" />
            </a>
            <a href="https://github.com/mbullington">
              <FAB fa="fa-github" />
            </a>
            <a href="https://twitter.com/mikebullingtn">
              <FAB fa="fa-twitter" />
            </a>

            <Link href="resume.pdf">Resume / CV</Link>
          </InlineRow>
        </div>
      </div>
    </div>
  );
}
