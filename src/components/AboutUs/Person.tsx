import * as React from "react";
import { EventTitle } from "../EventTitle";
import "./index.css";

export const Person = ({
  title,
  titleDescription,
  description,
  reverse,
  children,
}: React.PropsWithChildren & {
  title: string;
  titleDescription: string;
  description: string;
  reverse?: boolean;
}) => (
  <div className={reverse ? "reverse" : ""}>
    <EventTitle title={title} description={titleDescription} />
    <div className="person-wrapper">
      <div className="person-image">{children}</div>
      <div className="person-description">{description}</div>
    </div>
  </div>
);