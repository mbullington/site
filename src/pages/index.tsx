import * as React from "react";
import cx from "clsx";

import { faGithub } from "@fortawesome/free-brands-svg-icons";

import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Section from "../components/Section";
import Card from "../components/Card";
import Link from "../components/Link";
import { FA } from "../components/Icon";
import ImageCard from "../components/ImageCard";
import SEO from "../components/SEO";

import useEleventy from "../components/useEleventy"
import Markup from "../components/Markup";

interface Props {
  children: React.ReactNode;
}

export function Layout({ children }: Props) {
  return (
    <div className="layout">
      <SEO />
      <Hero />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

interface TwoCardsProps {
  children: React.ReactNode;
}

export function TwoCards({ children }: TwoCardsProps) {
  return <div className={"twoCards"}>{children}</div>;
}

export default function Index() {
  const { images } = useEleventy()

  return (
    <Layout>
      <Main>
        <Section title="Portfolio">
        <ImageCard html={images.airworks_screenshot} />
          <Card
            title="DJI Research LLC."
            titleBackground={"dji"}
            duration="May 2019 — Jan 2021"
            logo={() => <Markup html={images.dji_logo} />}
            logoBackground="var(--dji)"
          >
            <p>
              I worked at <Link href="https://enterprise.dji.com">DJI Research</Link> both full-time and during college as a Front-End Web Engineering Intern. Along with this role, I also held project-specific titles of Product Manager, Compliance Lead, and Interim Tech Lead.
              <br /><br />
              Starting in Q4 2020 my full-time role was <strong>Product Manager</strong> focusing on Public Safety for the US/Canada under <Link href="https://www.dji.com/flysafe">DJI FlySafe</Link>. The role included planning roadmap/releases for our 4-person team and maintaining relationships with stakeholders. In place of a dedicated <strong>product designer</strong>, I performed the role as PM and created high-fidelity designs for all application flows using Sketch.
              <br /><br />
              As Compliance Lead, I initiated compliance with the <strong>NIST 800-53 r4</strong> framework. This included authoring over 70 controls, creating a proposal to stakeholders, and helping the Tech Lead create compliant solutions.
              <br /><br />
              As Interim Tech Lead from Q2 2019 to Q2 2020, I led front-end development for DJI's <Link href="https://www.faa.gov/uas/programs_partnerships/data_exchange/">FAA LAANC</Link> service. This included collaborating in-person with technical expertise from Palo Alto and Shenzhen to build a complex web mapping product. The project required strict adherance to FAA advisory rule sets.
              <br /><br />
              I was a foundational member for how the Palo Alto office ("USPA") writes JavaScript. I created and open-sourced <Link href="https://github.com/dji-dev/us-web">dji-dev/us-web</Link> and contributed to <strong>Turf.js</strong> representing DJI. Additionally, I worked on multiple projects such as DJI AirWorks.
            </p>
          </Card>

          <Card
            title="Wolfram Research Inc."
            titleBackground={"wolfram"}
            duration="May 2018 — May 2019"
            logo={() => <Markup html={images.wolfram_logo} />}
            logoBackground="var(--wolfram)"
          >
            <p>
            I worked as a summer intern on the <Link href="https://www.wolfram.com/cloud/">Wolfram Cloud</Link> team, which continued part-time during college to Q2 2019.
            <br /><br />
            My main project was overhauling the typesetting engine to improve aesthetic and accuracy. The "new" look was inspired by metrics from LaTeX and Wolfram Player for iOS. I wrote about algorithms I developed in <Link href="https://medium.com/wolfram-developers/modernizing-math-typesetting-with-svg-8d82ca606b9a">{'Modernizing Math Typesetting with SVG'}</Link>.
            <br /><br />
            I also created a clean-room implementation of <Link href="https://reference.wolfram.com/language/ref/DynamicGeoGraphics.html">DynamicGeoGraphics</Link> on the web using Leaflet. <code>DynamicGeoGraphics</code> is a data-driven component which supports arbitrary polygons, geographic projections, and "markers" that interact with the DOM.
            </p>
          </Card>

          <Card
            title="DGLogik Inc."
            titleBackground={"dglogik"}
            duration="April 2015 — May 2018"
            logo={() => <Markup html={images.dglogik_logo} />}
            logoBackground="var(--dglogik)"
          >
            <p>
              I started work part-time at <Link href="https://www.dglogik.com/">DGLogik</Link> as an IoT Software Engineer and continued throughout high school and early college. During my time at DGLogik, I worked on specialized IoT solutions for customers like Cisco, IBM, and Apple. 
              <br /><br />
              I was a core member of the <Link href="https://github.com/IOT-DSA">IOT-DSA</Link> protocol created by <Link href="https://deepmess.com/en/">Rick Zhou</Link>. For DSA, I developed the initial JavaScript SDK and additional IoT bridges for industry and consumer products. Eventually, I created the infrastructure to run our flagship Dart SDK from Node.js.
              <br /><br />
              In 2016 DGLogik Inc. was acquired by Acuity Brands, where I was re-hired as a part-time Software Engineer.
              <br /><br />
              In this time, I made significant contributions to <Link href="https://www.dglogik.com/products/dglux-for-dsa">DGLux5</Link>, a low-code environment for creating IoT dashboards. "Owned" features for web include technologies such as Mapbox, D3, and THREE.js. Most of these features were created for <Link href="https://www.acuitybrands.com/products/detail/775921/atrius/atrius-insights/atrius-insights-spatial-analytics-platform-service-and-web-application">Atrius Insights</Link>.
            </p>
          </Card>
        </Section>

        <Section
          title="Side Projects"
        >
            <ImageCard html={images.interval_screenshot} />
            <Card
              title="Interval"
              links={() => (
                <>
                  <Link
                    href="https://play.google.com/store/apps/details?id=xyz.bullington.interval"
                  >
                    Google Play (TM)
                  </Link>
                </>
              )}
              style={{ minHeight: "40vh" }}
            >
              <p>
              Designed alongside{" "}
              <Link href="https://pratti.design/interval">
                Eduardo Pratti
              </Link>.
              <br /><br />
              We built Interval around what I would want in a time tracker,
              based on my experience as a remote developer. By emphasizing good
              design, Interval makes it super simple to go from ‘
              <i>I want to work</i>’ to ‘<i>work is in my timecard.</i>’
              Features that help with this include a <strong>Timer</strong>,{" "}
              <strong>History</strong> tab to manually add entries (
              <i>shown right on desktop</i>), and <strong>CSV Export</strong>.
              <br /><br />
              Interval is built entirely with <strong>Flutter</strong>.
              </p>
            </Card>

          <TwoCards>
            <ImageCard html={images.hackpsu_screenshot} />
            <Card
              title="HackPSU"
            >
              <p>
              As part of the HackPSU Tech Team, currently working with{" "}
              <Link href="https://rahulramkumar.dev/">Rahul Ramkumar</Link> and many others
              on HackPSU's mobile app.
              <br /><br />
              <Link href="https://hackpsu.org/">
                    HackPSU
                  </Link> is a bi-yearly hackathon organized by students at Penn State
              University. In Nov 2019 HackPSU saw nearly 900 attendees.
              HackPSU is an official MLH hackathon.
              <br /><br />
              I designed our app and kickstarted development, helping to mentor other students in JavaScript, React Native, and good software practices. All HackPSU development is <Link href="https://github.com/hack-PSU/frontend-app">open-source</Link>.
              </p>
            </Card>
            <Card
              title="node_preamble.dart"
              duration="2015 — 2019"
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
              Compiler that allows Dart libraries to be accessed from Node.js as
              regular libraries. Automatically compiles Dart code to JavaScript,
              mimicks Dart I/O using Node.js, and generates helpers between JS
              and Dart classes. Also generates TypeScript definitions.
            </Card>
            <Card>
              <div className={"hint"}>
                Check out my{" "}
                <Link href="https://github.com/mbullington">
                  other GitHub projects
                </Link>
                ! I’ve been an open-source contributor{" "}
                <Link href="https://github.com/Polymer/polymer/issues/646">
                  since 2014
                </Link>
                .
              </div>
            </Card>
          </TwoCards>
        </Section>
        <Section title="Sitemap" id="sitemap">
            <p className={"sitemapText"}>
              The sitemap contains links to other places on the site and affiliates. Some of these are unmaintained but linked for posterity.
            </p>
            <a href="https://bullington.xyz" target="_blank" className="sitemap disabled">Home</a>
            <a href="https://www.producthunt.com/upcoming/interval-2-0" target="_blank" className="sitemap">Interval 2.0</a>
            <a href="https://geojson.dev" target="_blank" className="sitemap">geojson.dev</a>
            <a href="https://disks.bullington.xyz" target="_blank" className="sitemap disabled">DISKS</a>
        </Section>
      </Main>
    </Layout>
  );
}
