import * as React from "react"
import Helmet from "react-helmet"

import useSiteTitle from "../useSiteTitle"

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
  const siteTitle = useSiteTitle()

  // Used in <title> html tag.
  const formattedTitle = title ? `${title} | ${siteTitle}` : siteTitle

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={formattedTitle}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
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
          content: "mikebullingtn",
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
        ...meta,
      ]}
    >
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Libre+Baskerville:400,700|Work+Sans:400,700" />
      <script src="https://kit.fontawesome.com/abdf58a873.js" />
    </Helmet>
  )
}
