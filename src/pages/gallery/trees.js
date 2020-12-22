import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import ImageTrees from "../../components/Gallery/imageTrees"
import HeroSectionTrees from "../../components/Herosection/HeroSectionTrees"

const Trees = () => (
  <Layout>
    <HeroSectionTrees />
    <SEO title="Trees" />
    <ImageTrees />
  </Layout>
)

export default Trees
