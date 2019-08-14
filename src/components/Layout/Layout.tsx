import * as React from "react"
import classnames from "classnames"

import Header from "../Header/Header"

import useLocalStorage from "../useLocalStorage"

interface Props {
  children: React.ReactNode
}

export const DarkModeContext = React.createContext<[boolean, Function]>([
  false,
  (val: string) => {},
])

export default function Layout({ children }: Props) {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", "false")

  return (
    <DarkModeContext.Provider
      value={[
        darkMode === "true" ? true : false,
        (val: string | boolean) => {
          if (val === true || val === false) {
            setDarkMode(val.toString())
          }

          if (val === "true" || val === "false") {
            setDarkMode(val)
          }
        },
      ]}
    >
      <div
        className={classnames({
          "dark-mode": darkMode === "true",
        })}
      >
        <Header />
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </DarkModeContext.Provider>
  )
}
