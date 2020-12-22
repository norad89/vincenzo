import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import ImageMusic from "../../components/Gallery/imageMusic"
import HeroSectionMusic from "../../components/Herosection/HeroSectionMusic"

const Music = () => (
  <Layout>
    <HeroSectionMusic />
    <SEO title="Music" />
    <ImageMusic />
  </Layout>
)

export default Music
