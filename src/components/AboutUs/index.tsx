import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import { Divider } from "../Divider";
import "./index.css";
import { Person } from "./Person";

export const AboutUs = () => (
  <div id="aboutus" className="block-wrapper">
    <Divider text="Nosotros" />
    <Person
      title="Novia"
      titleDescription="윤주현"
      description="Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text ever
      since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has survived not only five
      centuries, but also the leap into electronic typesetting, remaining
      essentially unchanged. It was popularised in the 1960s with the release
      of Letraset sheets containing Lorem Ipsum passages, and more recently
      with desktop publishing software like Aldus PageMaker including versions
      of Lorem Ipsum."
    >
      <StaticImage src="../../images/joohyun_2.jpg" alt="joohyun" />
    </Person>
    <Person
      reverse
      title="Novio"
      titleDescription="Jose Miguel"
      description="Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text ever
      since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has survived not only five
      centuries, but also the leap into electronic typesetting, remaining
      essentially unchanged. It was popularised in the 1960s with the release
      of Letraset sheets containing Lorem Ipsum passages, and more recently
      with desktop publishing software like Aldus PageMaker including versions
      of Lorem Ipsum."
    >
      <StaticImage src="../../images/josemiguel.png" alt="josemiguel" />
    </Person>
  </div>
);
