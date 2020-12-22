import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import ImageNudes from "../../components/Gallery/imageNudes"
import HeroSectionNudes from "../../components/Herosection/HeroSectionNudes"

const Nudes = () => (
  <Layout>
    <HeroSectionNudes />
    <SEO title="Nudes" />
    <ImageNudes />
  </Layout>
)

export default Nudes
