import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import "./index.css";

export const Hero = () => (
  <div className="hero">
    <div className="hero-content">
      <div className="hero-text">
        Jose Miguel y Joohyun
      </div>
      <div className="hero-cover">
        <StaticImage src="../../images/main.jpg" alt="logo" />
      </div>
      <div className="hero-text">
        4 de Septiembre de 2022<br/>
        2022년 9월 4일
      </div>
    </div>
  </div>
);
