import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "./image.css"

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          name: { nin: ["background"] }
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
    <div className="image-container">
      <h1>galleria</h1>
      <div className="image-masonry">
        {data.allFile.edges.map((image, key) => (
          <div className="wrapper" key={key} onClick={() => handleClick(image)}>
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
