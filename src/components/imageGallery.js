import React from "react"
import { useStaticQuery, graphql, navigate } from "gatsby"
import Img from "gatsby-image"
import "./image.css"

const Image = ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
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
            relativeDirectory
          }
        }
      }
    }
  `)

  const name = location.state.name

  const handleClick = () => {
    console.log(name)
    console.log(data)
  }

  return (
    <div className="gallery-container">
      <h1>{location.state.name}</h1>
      <div className="image-masonry">
        {data.allFile.edges.map((image, key) => (
          <div
            className="image-container"
            key={key}
            onClick={() => handleClick()}
          >
            <Img
              className="image-item"
              fluid={image.node.childImageSharp.fluid}
              alt={image.node.base.split(".")[0]}
            />
            <div className="middle">
              <div className="text">{image.node.base.split(".")[0]}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Image
