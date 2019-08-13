import { useStaticQuery, graphql } from "gatsby"

export default function useSiteTitle(): string {
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return site.siteMetadata.title
}