import * as React from "react";

import { faLinkedin, faGithub, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

import InlineRow from "./InlineRow";
import Link from "./Link";
import { FA } from "./Icon";

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
      <a href="https://www.youtube.com/channel/UC3pu5W0aZjWbglMOP0JY3uA/videos" target="_blank">
        <FA icon={faYoutube} />
      </a>
      <a href="https://twitter.com/mbullington_" target="_blank">
        <FA icon={faTwitter} />
      </a>

      <Link href="https://docs.google.com/document/d/1nIB3cU0V9yjJ6kge7H_0HizSKdiCs3EMJ7A9lOWsMAg/edit?usp=sharing">Resume / CV</Link>
    </InlineRow>
  );
}
