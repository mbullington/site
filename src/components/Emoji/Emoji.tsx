import * as React from "react";

import styles from "./Emoji.module.scss";

// Manual mapping of emoji to their Twimoji images.
const TWIMOJI: { [key: string]: string } = {
  "🇺🇸": "https://twemoji.maxcdn.com/2/72x72/1f1fa-1f1f8.png",
  "🎓": "https://twemoji.maxcdn.com/2/72x72/1f393.png",
}

interface EmojiProps {
  emoji: string
}

export default function Emoji({ emoji }: EmojiProps) {
  if (TWIMOJI[emoji] != null) {
    return (
      <img
        className={styles.emoji}
        draggable={false}
        alt={emoji}
        src={TWIMOJI[emoji]}
      />
    )
  }

  return <i className={styles.emoji}>{emoji}</i>
}