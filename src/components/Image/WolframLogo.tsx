import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

export default function WolframLogo() {
  const { placeholderImage } = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "wolfram_logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 256) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return <Img fluid={placeholderImage.childImageSharp.fluid} />;
}
