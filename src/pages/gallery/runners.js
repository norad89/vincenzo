import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import ImageRunners from "../../components/Gallery/imageRunners"
import HeroSectionRunners from "../../components/Herosection/HeroSectionRunners"

const Runners = () => (
  <Layout>
    <HeroSectionRunners />
    <SEO title="Runners" />
    <ImageRunners />
  </Layout>
)

export default Runners
