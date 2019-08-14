import * as React from "react";
import Helmet from "react-helmet";

import Layout from "../components/Layout/Layout";
import Image from "../components/Image/Image";
import SEO from "../components/SEO/SEO";

import "./index.scss";

export default function Index() {
  return (
    <Layout>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Libre+Baskerville:400,700|Work+Sans:400,700|Fira+Mono:400"
        />
        <script src="https://kit.fontawesome.com/abdf58a873.js" />
      </Helmet>
      <SEO />
    </Layout>
  );
}
