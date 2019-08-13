import * as React from "react"

import Header from "../Header/Header"
import useSiteTitle from "../useSiteTitle";

interface Props {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  const siteTitle = useSiteTitle();

  return (
    <>
      <Header siteTitle={siteTitle} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}
