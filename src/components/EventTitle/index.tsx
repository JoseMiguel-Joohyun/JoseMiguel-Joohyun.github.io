import * as React from "react";
import "./index.css";

export const EventTitle = ({ title, description, reverse }: { reverse?: boolean; title: string;description: string; }) => (
  <div className={`event-header ${reverse ? 'reverse' : ''}`}>
    <div className="event-title">{title}</div>
    <div className="event-description">{description}</div>
  </div>
);
