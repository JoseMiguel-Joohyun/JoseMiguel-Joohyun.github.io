import * as React from "react";
import { Divider } from "../Divider";
import "./index.css";

export const Event = () => (
  <div id="evento" className="block-wrapper">
    <Divider text="EL EVENTO" />
    <div className="event-header">
      <div className="event-title">LA BODA</div>
      <div className="event-description">¡El gran día!</div>
    </div>
  </div>
);
