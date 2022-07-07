import * as React from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";
import "./index.css";

export const Layout = ({ children }: React.PropsWithChildren) => (
  <>
    <Header />
    <div>
      <main>{children}</main>
      <Footer />
    </div>
  </>
);