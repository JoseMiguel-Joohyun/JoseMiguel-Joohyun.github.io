import { Link } from "gatsby";
import * as React from "react";

import "./index.css";

export const Header = () => (
  <header>
    <div className="header-content">
      <div className="header-menu">
        <Link to="#location">LOCATION</Link>
        <Link to="#event">EVENT</Link>
        <Link to="#contact">CONTACTO</Link>
      </div>
    </div>
  </header>
);
