import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

export default function IntervalScreenshot() {
  const { placeholderImage } = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "airworks_screenshot.png" }) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return <Img fluid={placeholderImage.childImageSharp.fluid} />;
}
