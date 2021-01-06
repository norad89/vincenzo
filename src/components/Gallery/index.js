import React, { useState, Fragment } from "react"
import Img from "gatsby-image"
import "./gallery.css"
import "../image.css"
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css"

const ImageGallery = props => {
  const [isOpen, setIsOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)
  const dataGallery = props.dataGallery
  const titleGallery = props.titleGallery

  const handleClick = (image, key) => {
    setPhotoIndex(key)
    setIsOpen(true)
    return console.log(image.node)
  }

  return (
    <Fragment>
      <div className="gallery-container">
        <h1>{titleGallery}</h1>
        <div className="image-masonry">
          {dataGallery.map((image, key) => (
            <div
            role="button"
            className="image-container"
            key={key}
            onClick={() => handleClick(image, key)}
            onKeyDown={() => handleClick(image, key)}
            tabIndex={key}
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
      {isOpen && (
        <Lightbox
          mainSrc={dataGallery[photoIndex].node.childImageSharp.fluid.src}
          nextSrc={
            dataGallery[(photoIndex + 1) % dataGallery.length].node
              .childImageSharp.fluid.src
          }
          prevSrc={
            dataGallery[
              (photoIndex + dataGallery.length - 1) % dataGallery.length
            ].node.childImageSharp.fluid.src
          }
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + dataGallery.length - 1) % dataGallery.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % dataGallery.length)
          }
        />
      )}
    </Fragment>
  )
}

export default ImageGallery
