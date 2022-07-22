import * as React from "react"
import { AboutUs } from "../components/AboutUs";
import { Event } from "../components/Event";
import { Layout } from "../components/Layout"
import { Hero } from "../components/Hero";

const IndexPage = () => (
  <Layout>
    <Hero />
    <AboutUs />
    <Event />
  </Layout>
);

export default IndexPage
