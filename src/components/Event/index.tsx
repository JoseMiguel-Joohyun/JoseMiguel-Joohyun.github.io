

import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import { Divider } from "../Divider";
import { EventTitle } from "../EventTitle";
import "./index.css";

export const Event = () => (
  <div id="location" className="block-wrapper">
    <Divider text="El Evento" />
    <EventTitle title="Hora" description="La 1 de la tarde" />
    <EventTitle title="Lugar" description="Yongsan Family Park" />
    <div className="location-image">
      <StaticImage src="../../images/location.jpeg" alt="location" />
    </div>
  </div>
);
