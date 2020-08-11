import * as React from "react";
import cx from "clsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

import styles from "./Icon.module.scss";

interface Props {
  children: React.ReactNode;
}

export default function Icon({ children }: Props) {
  return <div className={styles.icon}>{children}</div>;
}

interface FAProps {
  icon: IconProp;
}

export function FA({ icon }: FAProps) {
  return <FontAwesomeIcon className={styles.icon} icon={icon} />;
}
