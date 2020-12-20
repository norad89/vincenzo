import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ImageGallery from "../components/imageGallery"
import HeroSectionGallery from "../components/HeroSectionGallery"

const Gallery = ({location}) => (
  <Layout>
    <HeroSectionGallery />
    <SEO title="Gallery" />
    <ImageGallery location={location} />
  </Layout>
)

export default Gallery
