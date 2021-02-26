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
          <span>last updated 2.26.21</span>
        </InlineRow>
        <p className="text">
          I'm a multidisciplinary software developer with over 5 years of part-time industry experience. I'm a developing designer and aspiring product manager. Most recently, I worked at <a className={"linkDJI"}>DJI</a> as a Product Manager and Front-End Web Developer focusing on NA Public Safety.
          <br/><br />Presently, I'm focused on finishing my undergraduate degree. Areas of expertise include client-side <b>JavaScript</b>, web mapping technologies like <b>Mapbox</b>, and <b>Flutter</b>. On this site, you'll find projects I've worked on both professionally and independently.
          <br /><br />
          I am currently seeking a career post-graduation (May 2021) and would love to talk about roles and fit. To work with me, please reach out at <Link href="mailto:hello@bullington.xyz">hello@bullington.xyz</Link>.
        </p>

        <Socials />
      </div>
    </div>
  );
}
