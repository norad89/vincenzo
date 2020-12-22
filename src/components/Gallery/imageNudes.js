import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "../image.css"

const ImageNudes = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          relativeDirectory: { regex: "/nudi/" }
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

  const handleClick = props => {
    return console.log(props.node.base.split(".")[0])
  }

  return (
    <div className="gallery-container">
      <h1>nudi</h1>
      <div className="image-masonry">
        {data.allFile.edges.map((image, key) => (
          <div
            className="image-container"
            key={key}
            onClick={() => handleClick(image)}
          >
            <Img
              className="image-item"
              fluid={image.node.childImageSharp.fluid}
              alt={image.node.base.split(".")[0]}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageNudes
