import React, { useRef } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import ImageGallery from "../components/Gallery"
import "../components/HeroSection/HeroSection.css"
import cover from "../images/fumatori/fumatori_cover.jpg"
import { Button } from "../components/ButtonElements"

const Smokers = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          relativeDirectory: { regex: "/fumatori/" }
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

  const titleGallery = "fumatori"
  const dataGallery = data.allFile.edges
  const galleryRef = useRef(null)

  const handleClick = () => {
    galleryRef.current.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <Layout>
      <div
        className="hero-container"
        style={{ backgroundImage: `url(${cover})` }}
      >
        <h1>{titleGallery}</h1>
        <div className="hero-btns">
          <Button fontBig big primary onClick={() => handleClick()}>
            vedi le foto
          </Button>
        </div>
      </div>
      <SEO title="fumatori" />
      <div ref={galleryRef}>
        <ImageGallery dataGallery={dataGallery} titleGallery={titleGallery} />
      </div>
    </Layout>
  )
}

export default Smokers
