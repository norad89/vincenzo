import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import ImagePhotographers from "../../components/Gallery/imagePhotographers"
import HeroSectionPhotographers from "../../components/Herosection/HeroSectionPhotographers"

const Photographers = () => (
  <Layout>
    <HeroSectionPhotographers />
    <SEO title="Photographers" />
    <ImagePhotographers />
  </Layout>
)

export default Photographers
