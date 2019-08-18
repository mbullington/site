import * as React from "react";
import classnames from "classnames";
import Helmet from "react-helmet";

import Layout from "../components/Layout/Layout";
import Section from "../components/Section/Section";
import Card from "../components/Card/Card";
import Link from "../components/Link/Link";
import { FAB } from "../components/Icon/Icon";
import SEO from "../components/SEO/SEO";

import "../styles/global.scss";
import styles from "./index.module.scss";

interface TwoCardsProps {
  children: React.ReactNode;
}

export function TwoCards({ children }: TwoCardsProps) {
  return <div className={styles.twoCards}>{children}</div>;
}

export default function Index() {
  return (
    <Layout>
      {/* Stuff to inject into head. */}
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Libre+Baskerville:400,700|Work+Sans:400,700|Fira+Mono:400"
        />
        <script src="https://kit.fontawesome.com/abdf58a873.js" />
      </Helmet>
      <SEO />
      {/* Actual content. */}
      <div style={{ position: "relative" }}>
        <div className={classnames("columns", styles.columns)}>
          <div className="column is-one-third">
            {/* TODO: Aside */}
          </div>
          <div className="column is-6">
            <Section title="Work Experience">
              <Card
                title="DJI Research LLC."
                titleBackground={styles.dji}
                duration="May 2019 — Present"
                location="Palo Alto, CA | Shenzhen, China | Remote"
              />

              <Card
                title="Wolfram Research Inc."
                titleBackground={styles.wolfram}
                duration="May 2018 — May 2019"
                location="Champaign, IL | Remote"
              />

              <Card
                title="DGLogik Inc."
                titleBackground={styles.dglogik}
                duration="April 2018 — May 2018"
                location="Oakland, CA | Remote"
              />
            </Section>

            <Section title="Personal Projects">
              <Card title="Interval" duration="April 2019" />

              <TwoCards>
                <Card title="DISKS" duration="May 2017" />

                <Card
                  title="Jackson Plumbing"
                  duration="May 2018 — October 2018"
                />
              </TwoCards>
            </Section>

            <Section title="Education">
              <Card
                title="Pennsylvania State University"
                duration="August 2017 — May 2021 (projected)"
              />
            </Section>

            <Section title="Open Source">
              <TwoCards>
                <Card
                  title="yellowstone"
                  links={() => (
                    <>
                      <a href="https://github.com/mbullington/yellowstone" target="_blank">
                        <FAB fa="fa-github" />
                      </a>
                      <Link href="https://github.com/mbullington/yellowstone/blob/master/examples/wowza.js">
                        Example Code
                      </Link>
                    </>
                  )}
                >
                  Pure TypeScript implementation of RTP/RTSP client protocols
                  for video streaming without external tools such as
                  <code>ffmpeg</code>. Supports H264 transport and additional IP
                  camera features.
                </Card>
                <Card
                  title="node_preamble.dart"
                  links={() => (
                    <a href="https://github.com/mbullington/node_preamble.dart" target="_blank">
                      <FAB fa="fa-github" />
                    </a>
                  )}
                >
                  Wrapper library that allows for Dart applications to run in
                  Node.js. Small part of the <code>sass</code> npm package,
                  other Google projects, and official tooling for the Khronos
                  Group (glTF-Validator).
                </Card>
              </TwoCards>
              <TwoCards>
                <Card
                  title="calzone.dart"
                  duration="2015"
                  links={() => (
                    <>
                      <a href="https://github.com/dglogik/calzone.dart" target="_blank">
                        <FAB fa="fa-github" />
                      </a>
                      <Link href="https://github.com/dglogik/calzone.dart/wiki/Internal-Workings">
                        Design Document
                      </Link>
                    </>
                  )}
                >
                  Compiler that allows Dart libraries to be accessed from
                  Node.js as regular libraries. Automatically compiles Dart code
                  to JavaScript, mimicks Dart I/O using Node.js, and generates
                  helpers between JS and Dart classes. Also generates TypeScript
                  definitions.
                </Card>
                <Card>
                  
                    <div className={styles.hint}>
                      Check out my <a href="https://github.com/mbullington" target="_blank">other GitHub projects</a>! I've been an open-source
                      contributor <a href="https://github.com/Polymer/polymer/issues/646" target="_blank">since 2014</a>.
                    </div>
                </Card>
              </TwoCards>
            </Section>
          </div>
        </div>
      </div>
    </Layout>
  );
}
