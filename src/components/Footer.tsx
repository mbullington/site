import * as React from "react";

import Link from "./Link";
import Socials from "./Socials";

export default function Footer() {
  return (
    <footer className={"footer"}>
      <p className={"text"}>
        To work with me, please reach out at{" "}
        <Link href="mailto:hello@bullington.xyz">hello@bullington.xyz</Link>.
      </p>
      <br />
      <Socials />
    </footer>
  );
}
