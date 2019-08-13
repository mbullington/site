import * as React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import useSiteTitle from "../useSiteTitle";

interface Props {
  title?: string
  description?: string
  lang?: string
  meta?: any[]
}

export default function SEO({
  title = "",
  description = "",
  lang = "en",
  meta = [],
}: Props) {
  const siteTitle = useSiteTitle();

  const titleStr = title ? `${title} | ${siteTitle}` : siteTitle

  const metaDescription = description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={titleStr}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}
