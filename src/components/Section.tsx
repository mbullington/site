import * as React from "react";

interface Props {
  title: React.ReactNode;
  children?: React.ReactNode;
  id?: string;
}

export default function Section({ title, children, id }: Props) {
  return (
    <section className={"section"} id={id}>
      <h2 className={"title"}>
        {title}
      </h2>
      {children}
    </section>
  );
}
