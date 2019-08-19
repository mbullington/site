import * as React from "react";

import styles from "./ImageCard.module.scss";

interface Props {
  children?: React.ReactNode;
}

export default function ImageCard({ children }: Props) {
  return (
    <div className={styles.imageCard}>
      <div className={styles.inner}>{children}</div>
    </div>
  );
}
