import * as React from "react";
import "./index.css";

export const EventTitle = ({ title, description }: { title: string;description: string; }) => (
  <div className="event-header">
      <div className="event-title">{title}</div>
      <div className="event-description">{description}</div>
    </div>
);
