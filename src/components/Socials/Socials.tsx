import * as React from "react";

import { faLinkedin, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";

import InlineRow from "../InlineRow/InlineRow";
import Link from "../Link/Link";

import { FA } from "../Icon/Icon";

export default function Socials() {
  return (
    <InlineRow spacing="small" style={{ fontWeight: "bold" }}>
      <a
        href="https://www.linkedin.com/in/michael-bullington-617a67b8/"
        target="_blank"
      >
        <FA icon={faLinkedin} />
      </a>
      <a href="https://github.com/mbullington" target="_blank">
        <FA icon={faGithub} />
      </a>
      <a href="https://twitter.com/mikebullingtn" target="_blank">
        <FA icon={faTwitter} />
      </a>

      <Link href="resume.pdf">Resume / CV</Link>
    </InlineRow>
  );
}
