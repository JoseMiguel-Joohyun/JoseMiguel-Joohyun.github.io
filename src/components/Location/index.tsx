import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import { Divider } from "../Divider";
import "./index.css";

export const Location = () => (
  <div id="location" className="block-wrapper">
    <Divider text="El lugar" />
    <div className="event-header">
      <div className="event-title">Lugar</div>
      <div className="event-description">Yongsan Family Park</div>
    </div>
    <div className="location-image">
      <StaticImage src="../../images/location.jpeg" alt="location" />
    </div>
  </div>
);
