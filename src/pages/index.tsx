import * as React from "react";
import classnames from "classnames"
import Helmet from "react-helmet";

import Aside from "../components/Aside/Aside";
import Layout from "../components/Layout/Layout";
import Section from "../components/Section/Section";
import Card from "../components/Card/Card";

import Image from "../components/Image/Image";
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
            <Aside />
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
                <Card title="yellowstone" />
                <Card title="node_preamble.dart" />
              </TwoCards>
              <TwoCards>
                <Card title="calzone.dart" />
                <Card>Check out my other GitHub projects. I've been an open-source contributor since 2014.</Card>
              </TwoCards>
            </Section>
          </div>
        </div>
      </div>
    </Layout>
  );
}
