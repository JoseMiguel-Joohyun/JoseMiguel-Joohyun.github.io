import * as React from "react"
import { Contact } from "../components/Contact";
import { Event } from "../components/Event";
import { Location } from "../components/Location";
import { Layout } from "../components/Layout"

const IndexPage = () => (
  <Layout>
    <Event />
    <Location />
    <Contact />
  </Layout>
);

export default IndexPage
