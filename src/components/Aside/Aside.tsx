import * as React from "react";
import { motion, useViewportScroll, useSpring } from "framer-motion";

import useWindowSize from "../useWindowSize"

import styles from "./Aside.module.scss";

export default function Aside() {
  const [position, setPosition] = React.useState<"absolute" | "fixed">("absolute")

  const { scrollY } = useViewportScroll();

  const {height: windowHeight} = useWindowSize()

  React.useEffect(() => {
    const unsubscribe = scrollY.onChange(y => {
      const needsFixed = y > windowHeight
      setPosition(needsFixed ? "fixed" : "absolute")
    })
  }, [])

  return (
    <motion.div
      className={styles.aside}
      style={{ position }}
    >
    </motion.div>
  );
}
