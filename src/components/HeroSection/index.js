import React, { useRef } from "react"
import "./HeroSection.css"
import { Button } from "../ButtonElements"
import cover from "../../images/background.jpg"

export default function HeroSection() {
  const galleryRef = useRef(null)
  const handleClick = () => {
    galleryRef.current.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div>
      <div
        className="hero-container"
        style={{ backgroundImage: `url(${cover})` }}
      >
        <h1>Vincenzo Raimondi</h1>
        <p>fotografo</p>
        <div className="hero-btns">
          <Button fontBig big primary onClick={() => handleClick()}>
            raccolta fotografica
          </Button>
        </div>
      </div>
      <div ref={galleryRef}></div>
    </div>
  )
}
