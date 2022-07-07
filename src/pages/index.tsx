import * as React from "react"
import { Contact } from "../components/Contact";
import { Event } from "../components/Event";
import { Location } from "../components/Location";
import { Layout } from "../components/Layout"
import { Hero } from "../components/Hero";

const IndexPage = () => (
  <Layout>
    <Hero />
    <Event />
    <Location />
    <Contact />
  </Layout>
);

export default IndexPage
