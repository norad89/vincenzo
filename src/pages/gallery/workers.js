import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import ImageWorkers from "../../components/Gallery/imageWorkers"
import HeroSectionWorkers from "../../components/Herosection/HeroSectionWorkers"

const Workers = () => (
  <Layout>
    <HeroSectionWorkers />
    <SEO title="Workers" />
    <ImageWorkers />
  </Layout>
)

export default Workers
