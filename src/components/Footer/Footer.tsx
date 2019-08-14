import * as React from "react";

import Link from "../Link/Link";
import Socials from "../Socials/Socials";

import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>
        To work with me, please reach out at{" "}
        <Link href="">hello@bullington.xyz</Link>.
      </p>
      <br />
      <Socials />
    </footer>
  );
}
