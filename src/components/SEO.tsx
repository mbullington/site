import * as React from "react"
import Helmet from "react-helmet"

import useEleventy from "./useEleventy"

interface Props {
  description?: string
  lang?: string
  meta?: any[]
}

export default function SEO({
  description = "",
  lang = "en",
  meta = [],
}: Props) {
  const { title } = useEleventy()

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      meta={[
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
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
    />
  )
}
