import * as React from "react";
import "./index.css";

export const Layout = ({ children }: React.PropsWithChildren) => (
  <>
    <div>
      <main>{children}</main>
    </div>
  </>
);