import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import ImageSmokers from "../../components/Gallery/imageSmokers"
import HeroSectionSmokers from "../../components/Herosection/HeroSectionSmokers"

const Smokers = () => (
  <Layout>
    <HeroSectionSmokers />
    <SEO title="Smokers" />
    <ImageSmokers />
  </Layout>
)

export default Smokers
