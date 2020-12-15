import HeroSection from "../components/HeroSection"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSection />
    <h1>Content</h1>
  </Layout>
)

export default IndexPage
