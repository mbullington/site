import * as React from "react";

import {
  faGlobeAsia,
  faGlobeAmericas,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Main from "../components/Main/Main";
import Section from "../components/Section/Section";
import Card from "../components/Card/Card";
import Link from "../components/Link/Link";
import { FA } from "../components/Icon/Icon";
import ImageCard from "../components/ImageCard/ImageCard";
import SEO from "../components/SEO/SEO";

import IntervalScreenshot from "../components/Image/IntervalScreenshot";
import DJILogo from "../components/Image/DJILogo";
import WolframLogo from "../components/Image/WolframLogo";
import DGLogikLogo from "../components/Image/DGLogikLogo";

import "../styles/global.scss";
import styles from "./index.module.scss";

interface Props {
  children: React.ReactNode;
}

export function Layout({ children }: Props) {
  return (
    <div className={styles.layout}>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

interface TwoCardsProps {
  children: React.ReactNode;
}

export function TwoCards({ children }: TwoCardsProps) {
  return <div className={styles.twoCards}>{children}</div>;
}

export default function Index() {
  return (
    <>
      <SEO />
      {/* Actual content. */}
      <Layout>
        <Main>
          <Section title="Personal Projects">
            <TwoCards>
              <Card
                title="Interval"
                duration="April 2019 — Present"
                links={() => (
                  <>
                    <Link href="https://play.google.com/store/apps/details?id=xyz.bullington.interval">
                      Play Store
                    </Link>
                    <Link href="https://github.com/mbullington/interval-issues/milestone/1">
                      Roadmap
                    </Link>
                  </>
                )}
              >
                We built Interval around what I would want in a time tracker,
                based on my experience as a remote developer. By emphasizing
                good design, Interval makes it super simple to go from ‘
                <i>I want to work</i>’ to ‘<i>work is in my timecard.</i>’
                Features that help with this include a <strong>Timer</strong>,{" "}
                <strong>History</strong> tab to manually add entries (
                <i>shown right on desktop</i>), and <strong>CSV Export</strong>.
                <br />
                <br />
                Technically, Interval is built almost entirely in{" "}
                <strong>Flutter</strong>, with the timer being implemented as a
                background service in <strong>Kotlin</strong>. The app’s data is
                stored entirely on-device with an <strong>SQLite</strong>{" "}
                database.
                <br />
                <br />
                Designed by{" "}
                <Link href="https://pratti.design">
                  Eduardo Pratti
                </Link> using <strong>Figma</strong>.
              </Card>
              <ImageCard>
                <IntervalScreenshot />
              </ImageCard>
            </TwoCards>
            <TwoCards>
              <Card
                title="DISKS"
                duration="May 2017"
                links={() => (
                  <>
                    <a
                      href="https://github.com/mbullington/disks"
                      target="_blank"
                    >
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
                Simple two-player puzzle game. Focuses on local multiplayer, and
                is inspired by other great puzzle games like Dao. Later updated
                to learn about PWAs.
              </Card>

              <Card
                title="Jackson Plumbing"
                duration="May 2018 — October 2018"
                location="Erie, PA"
              >
                Built a form generator using <strong>Electron</strong> and{" "}
                <strong>React</strong> for a local utility company. The work
                also included a simple DOCX templating engine.
              </Card>
            </TwoCards>
          </Section>

          <Section title="Work Experience">
            <Card
              title="DJI Research LLC."
              titleBackground={styles.dji}
              duration="May 2019 — Present"
              location="Palo Alto, CA | Shenzhen, China | Remote"
              links={() => (
                <>
                  <a href="http://dji.com" target="_blank">
                    <FA icon={faGlobeAsia} />
                  </a>
                  <Link href="https://we.dji.com/detail_en.html#1318&Palo%20Alto">
                    We’re hiring!
                  </Link>
                </>
              )}
              logo={() => <DJILogo />}
              logoBackground={styles.dji}
            >
              Front-End Engineering Intern
              <br />
              <ul>
                <li>
                  Lead front-end web development for a special project using Vue
                  2 and Mapbox. The product requires close coordination with
                  government regulations and DJI teams in Shenzhen. The product
                  will have a focus on the North American market.
                </li>
                <li>
                  Collaborated on a technical timeline for the project,
                  detailing tasks to front-end engineers in both Palo Alto and
                  Shenzhen.
                </li>
                <li>
                  Helped to interview candidates for various web positions in
                  the company.
                </li>
              </ul>
            </Card>

            <Card
              title="Wolfram Research Inc."
              titleBackground={styles.wolfram}
              duration="May 2018 — May 2019"
              location="Champaign, IL | Remote"
              links={() => (
                <>
                  <a href="https://www.wolfram.com/cloud/" target="_blank">
                    <FA icon={faGlobeAmericas} />
                  </a>
                  <Link href=" https://medium.com/wolfram-developers/modernizing-math-typesetting-with-svg-8d82ca606b9a">
                    Technical Post
                  </Link>
                </>
              )}
              logo={() => <WolframLogo />}
              logoBackground={styles.wolfram}
            >
              Intern, Core Engine R&D
              <br />
              <ul>
                <li>
                  Developed user-facing features for Wolfram Cloud using web
                  technologies such as React and Flow.
                </li>
                <li>
                  Overhauled typesetting engine to improve aesthetic and better
                  match TeX-like specifications. Wrote a technical post named{" "}
                  <b>Modernizing Math Typesetting with SVG</b>, linked below.
                </li>
                <li>
                  Created a library-agnostic mapping solution with default
                  Leaflet driver, combining Wolfram’s rich computational
                  intelligence with mapping on the web.
                </li>
              </ul>
            </Card>

            <Card
              title="DGLogik Inc."
              titleBackground={styles.dglogik}
              duration="April 2018 — May 2018"
              location="Oakland, CA | Remote"
              links={() => (
                <>
                  <a href="http://dglogik.com" target="_blank">
                    <FA icon={faGlobeAmericas} />
                  </a>
                  <Link href="https://github.com/IOT-DSA">Protocol</Link>
                  <Link href="http://dglogik.com/our-platform/dglux">
                    DGLux 5
                  </Link>
                </>
              )}
              logo={() => <DGLogikLogo />}
              logoBackground={styles.dglogik}
            >
              Part-Time Software Developer
              <br />
              <ul>
                <li>
                  Developed bespoke IoT solutions for an array of Fortune 500
                  companies such as Cisco, IBM, and Intel.
                </li>
                <li>
                  Helped create a secure protocol for IoT devices, including a
                  JavaScript and Dart SDK implementation. It is now an integral
                  part of their stack and ships to thousands of customers
                  worldwide.
                </li>
                <li>
                  Architected multiple prototypes using D3, THREE.js, and
                  Xamarin. Integrated a new mapping solution based on Mapbox
                  into DGLux 5, the company’s main product.
                </li>
                <li>
                  Transitioned a portion of the company’s internal processes
                  after acquisition by Acuity Brands Inc.
                </li>
              </ul>
            </Card>
          </Section>

          {/* <Section title="Education">
            <Card
              title="Pennsylvania State University"
              duration="August 2017 — May 2021 (projected)"
              location="State College, PA | prev Erie, PA"
            >
              Persuing a Bachelor’s Degree in <strong>Computer Science</strong>.
              <br />
              <br />
              Activities:
              <ul>
                <li>Schreyer Honors College</li>
                <li>Drumline (Behrend Drumlions)</li>
                <li>Behrend Energy Initiative</li>
                <li>HackPSU Participant</li>
              </ul>
            </Card>
          </Section> */}

          <Section title="Open Source">
            <TwoCards>
              <Card
                title="yellowstone"
                links={() => (
                  <>
                    <a
                      href="https://github.com/mbullington/yellowstone"
                      target="_blank"
                    >
                      <FA icon={faGithub} />
                    </a>
                    <Link href="https://github.com/mbullington/yellowstone/blob/master/examples/wowza.js">
                      Example Code
                    </Link>
                  </>
                )}
              >
                Pure TypeScript implementation of RTP/RTSP client protocols for
                video streaming without external tools such as
                <code>ffmpeg</code>. Supports H264 transport and additional IP
                camera features.
              </Card>
              <Card
                title="node_preamble.dart"
                links={() => (
                  <a
                    href="https://github.com/mbullington/node_preamble.dart"
                    target="_blank"
                  >
                    <FA icon={faGithub} />
                  </a>
                )}
              >
                Wrapper library that allows for Dart applications to run in
                Node.js. Small part of the <code>sass</code> npm package, other
                Google projects, and official tooling for the Khronos Group
                (glTF-Validator).
              </Card>
            </TwoCards>
            <TwoCards>
              <Card
                title="calzone.dart"
                duration="2015"
                links={() => (
                  <>
                    <a
                      href="https://github.com/dglogik/calzone.dart"
                      target="_blank"
                    >
                      <FA icon={faGithub} />
                    </a>
                    <Link href="https://github.com/dglogik/calzone.dart/wiki/Internal-Workings">
                      Design Document
                    </Link>
                  </>
                )}
              >
                Compiler that allows Dart libraries to be accessed from Node.js
                as regular libraries. Automatically compiles Dart code to
                JavaScript, mimicks Dart I/O using Node.js, and generates
                helpers between JS and Dart classes. Also generates TypeScript
                definitions.
              </Card>
              <Card>
                <div className={styles.hint}>
                  Check out my{" "}
                  <a href="https://github.com/mbullington" target="_blank">
                    other GitHub projects
                  </a>
                  ! I’ve been an open-source contributor{" "}
                  <a
                    href="https://github.com/Polymer/polymer/issues/646"
                    target="_blank"
                  >
                    since 2014
                  </a>
                  .
                </div>
              </Card>
            </TwoCards>
          </Section>
        </Main>
      </Layout>
    </>
  );
}
