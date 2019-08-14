import * as React from "react";

import InlineRow from "../InlineRow/InlineRow";
import Link from "../Link/Link";
import { FAB } from "../Icon/Icon";

export default function Socials() {
  return (
    <InlineRow spacing="small" style={{fontWeight: "bold"}}>
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
  );
}
