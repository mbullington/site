// Huge thanks to @narative/gatsby-theme-novela for DarkModeToggle
// and the cool animation.
//
// https://github.com/narative/gatsby-theme-novela/blob/master/%40narative/gatsby-theme-novela/src/components/Navigation/Navigation.Header.tsx#L276

import * as React from "react"
import classnames from "classnames"

import Icon from "../Icon/Icon"

import { DarkModeContext, FALLBACK_DARK_MODE } from "../DarkModeProvider/DarkModeProvider"

import styles from "./DarkModeToggle.module.scss"

interface Props {
  className?: string;
}

export default function DarkModeToggle({ className }: Props) {
  const [darkMode, setDarkMode] = React.useContext(DarkModeContext) || FALLBACK_DARK_MODE

  return (
    <div className={classnames(styles.darkModeToggle, className)} onClick={() => setDarkMode(!darkMode)}>
      <Icon>
        <div className={styles.moonOrSun} />
        <div className={styles.mask} />
      </Icon>
    </div>
  )
}
