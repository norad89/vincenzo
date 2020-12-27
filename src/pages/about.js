import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import about from "../images/about.jpg"

const About = () => (
  <Layout>
    <SEO title="about" />
    <div
      className="hero-container"
      style={{ backgroundImage: `url(${about})` }}
    >
    </div>
  </Layout>
)

export default About
