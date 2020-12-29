import React from "react"
import { useStaticQuery, graphql, navigate } from "gatsby"
import Img from "gatsby-image"
import "./image.css"

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          relativeDirectory: { regex: "/cover/" }
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
    const name = props.node.base.split(".")[0]
    navigate(`/${name}`)
  }

  return (
    <div className="gallery-container">
      <h1>raccolta fotografica</h1>
      <div className="image-masonry">
        {data.allFile.edges.map((image, key) => (
          <div
            role="button"
            className="image-container"
            key={key}
            onClick={() => handleClick(image)}
            onKeyDown={() => handleClick(image)}
            tabIndex={key}
          >
            <Img
              className="image-item"
              fluid={image.node.childImageSharp.fluid}
              alt={image.node.base.split(".")[0]}
            />
            <div
              role="button"
              className="middle"
              onClick={() => handleClick(image)}
              onKeyDown={() => handleClick(image)}
              tabIndex={key}
            >
              <div className="text">{image.node.base.split(".")[0]}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Image
