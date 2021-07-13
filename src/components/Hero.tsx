import * as React from "react";

import Socials from "./Socials";

import InlineRow from "./InlineRow";
import Link from "./Link";
import Emoji from "./Emoji";

export default function Hero() {
  const hasCompany = typeof window === "object" && !!document.location.hash;
  const company = hasCompany ? document.location.hash.substr(1) + " " : "";

  return (
    <div className="hero" data-controller="hero">
      <div className="position">
        <p className="title" data-hero-target="title">
          Hello {company}— I'm Michael.
        </p>

        <InlineRow spacing="small" className="attrs">
          <span>B. 1999</span>
          <Emoji emoji="🇺🇸" />
          <span>PSU '21</span>
          <Emoji emoji="🎓" />
          <span>last updated 7.12.21</span>
        </InlineRow>
        <p className="text">
          I'm a software developer who's passionate about building user
          interfaces. I currently work on{" "}
          <a className={"linkMapbox"}>Mapbox Studio</a>. Most recently, I worked
          at <a className={"linkDJI"}>DJI</a> focusing on NA Public Safety and
          Web Services.
          <br />
          <br />
          Areas of expertise include web mapping technologies like <b>Mapbox</b>
          , client-side <b>JavaScript</b>, and <b>Flutter</b>. On this site,
          you'll find projects I've worked on both professionally and
          independently. I live in Washington, D.C.
          <br />
          <br />
          Feel free to look around the site! If you have any inquiries, please
          reach out at{" "}
          <Link href="mailto:hello@bullington.xyz">hello@bullington.xyz</Link>.
        </p>

        <Socials />
      </div>
    </div>
  );
}
