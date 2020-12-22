import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import ImageChildhood from "../../components/Gallery/imageChildhood"
import HeroSectionChildhood from "../../components/Herosection/HeroSectionChildhood"

const Childhood = () => (
  <Layout>
    <HeroSectionChildhood />
    <SEO title="Childhood" />
    <ImageChildhood />
  </Layout>
)

export default Childhood
