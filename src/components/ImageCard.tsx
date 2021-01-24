import * as React from "react";
import Markup from "./Markup"

interface Props {
  html: string
}

export default function ImageCard({ html }: Props) {
  return (
    <Markup className="imageCard" html={html} />
  );
}
