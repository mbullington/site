import * as React from "react"
import classnames from "classnames"

import styles from "./Icon.module.scss"

interface Props {
  children: React.ReactNode;
}

export default function Icon({ children }: Props) {
  return <div className={styles.icon}>{children}</div>
}

// Manual mapping of emoji to their Twimoji images.
const TWIMOJI: { [key: string]: string } = {
  "🇺🇸": "https://twemoji.maxcdn.com/2/72x72/1f1fa-1f1f8.png",
  "🎓": "https://twemoji.maxcdn.com/2/72x72/1f393.png",
}

interface EmojiProps {
  emoji: string
}

export function Emoji({ emoji }: EmojiProps) {
  if (TWIMOJI[emoji] != null) {
    return (
      <img
        className={styles.icon}
        draggable={false}
        alt={emoji}
        src={TWIMOJI[emoji]}
      />
    )
  }

  return <i className={styles.icon}>{emoji}</i>
}

interface FABProps {
  fa: string
}

export function FAB({ fa }: FABProps) {
  return <i className={classnames("fab", fa, styles.icon)} />
}