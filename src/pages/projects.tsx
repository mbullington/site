import * as React from "react";

import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import SEO from "../components/SEO/SEO";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Section from "../components/Section/Section";
import Card from "../components/Card/Card";
import { FA } from "../components/Icon/Icon";
import Link from "../components/Link/Link";
import Main from "../components/Main/Main";

interface Props {
  children: React.ReactNode;
}

export function Layout({ children }: Props) {
  return (
    <div>
      <SEO />
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default function Projects() {
  return (
    <Layout>
      <Main>
        <Section title={"All Projects"} id="projects">
          <Card
            title="DISKS"
            duration="May 2017"
            links={() => (
              <>
                <a href="https://github.com/mbullington/disks" target="_blank">
                  <FA icon={faGithub} />
                </a>
                <a href="https://disks.bullington.xyz" target="_blank">
                  <FA icon={faGlobeAmericas} />
                </a>
                <Link href="http://gamescrafters.berkeley.edu/games.php?game=dao">
                  Dao (inspiration)
                </Link>
              </>
            )}
          >
            Simple two-player puzzle game. Focuses on local multiplayer, and is
            inspired by other great puzzle games like Dao. Later updated to
            learn about PWAs.
          </Card>

          <Card
            title="Jackson Plumbing"
            duration="May 2018 — October 2018"
            location="Erie, PA"
          >
            Built a form generator using <strong>Electron</strong> and{" "}
            <strong>React</strong> for a local utility company. The work also
            included a simple DOCX templating engine.
          </Card>
        </Section>
      </Main>
    </Layout>
  );
}
