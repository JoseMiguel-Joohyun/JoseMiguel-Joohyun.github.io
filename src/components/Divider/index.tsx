import * as React from "react";
import "./index.css";

export const Divider = ({ text }: { text: string; }) => (
  <div className="divider">
    <h2 className="divider-text">{text}</h2>
  </div>
);
