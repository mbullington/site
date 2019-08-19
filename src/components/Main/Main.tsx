import * as React from "react";
import classnames from "classnames";

import { BreakpointContext } from "../BreakpointProvider/BreakpointProvider";

import styles from "./Main.module.scss";

interface Props {
  children?: React.ReactNode;
}

export default function Main({ children }: Props) {
  const breakpoint = React.useContext(BreakpointContext);

  const contentColumnClasses = classnames("column", {
    "is-6 is-offset-4": breakpoint === "desktop",
    "is-9 is-offset-2": breakpoint === "tablet",
  });

  return (
    <main className={styles.main}>
      <div className={classnames("columns is-mobile", styles.columns)}>
        <div className={contentColumnClasses}>{children}</div>
      </div>
    </main>
  );
}
