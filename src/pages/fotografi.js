import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import ImageGallery from "../components/Gallery"
import "../components/HeroSection/HeroSection.css"
import cover from "../images/fotografi/fotografi_cover.jpg"

const Photographers = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          relativeDirectory: { regex: "/fotografi/" }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const titleGallery = "fotografi"
  const dataGallery = data.allFile.edges

  return (
    <Layout>
      <div
        className="hero-container"
        style={{ backgroundImage: `url(${cover})` }}
      >
        <h1>{titleGallery}</h1>
      </div>
      <SEO title="fotografi" />
      <ImageGallery dataGallery={dataGallery} titleGallery={titleGallery} />
    </Layout>
  )
}

export default Photographers
