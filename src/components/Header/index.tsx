import { Link } from "gatsby";
import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import "./index.css";

export const Header = () => (
  <header>
    <div className="header-content">
      {/* <div className="header-brand">
        <Link to="/">
					<StaticImage src="../../images/icon.png" alt="logo" />
        </Link>
      </div> */}
      <div className="header-menu">
        <Link to="#location">LOCATION</Link>
        <Link to="#event">EVENT</Link>
        <Link to="#contact">CONTACTO</Link>
      </div>
    </div>
  </header>
);
