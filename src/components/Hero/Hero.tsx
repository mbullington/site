import * as React from "react";
import scrollToWithAnimation from "scrollto-with-animation";

import Socials from "../Socials/Socials";

import InlineRow from "../InlineRow/InlineRow";
import Link from "../Link/Link";
import Emoji from "../Emoji/Emoji";

import styles from "./Hero.module.scss";

export default function Hero() {
  const handleClick = () => {
    scrollToWithAnimation(
      document.scrollingElement || document.documentElement,
      "scrollTop",
      window.innerHeight * 0.9,
      1000,
      "easeInOutCirc"
    );
  };

  const hasCompany = typeof window === "object" && !!document.location.hash;
  const company = hasCompany ? document.location.hash.substr(1) + " " : "";

  return (
    <div className={styles.hero}>
      <div className={styles.position}>
        <p className={styles.title}>
          Hello {company}— I'm Michael. I work on web at{" "}
          <a className={styles.linkDJI}>DJI</a>.
        </p>

        <InlineRow spacing="small" className={styles.attrs}>
          <span>21 y/o</span>
          <Emoji emoji="🇺🇸" />
          <span>PSU '21</span>
          <Emoji emoji="🎓" />
        </InlineRow>

        <p className={styles.text}>
          I'm a software developer who's passionate about building user
          interfaces. I build experiences for the web, mobile, and cloud. I'm
          also a college student, and create projects for the open source
          community.
          <br />
          <br />I have deep knowledge of client-side <b>JavaScript</b>{" "}
          architecture, mapping technologies like <b>Mapbox</b>, and am
          currently excited by <b>Flutter</b>. Fan of travel, but currently
          quarantining!
          <br />
          <span className={styles.seeBelow}>
            <br />
            <Link onClick={handleClick}>SEE BELOW</Link>
          </span>
        </p>

        <Socials />
      </div>
    </div>
  );
}
