import React from "react"
import "./HeroSection.css"
import { Button } from "../ButtonElements"

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>Vincenzo Raimondi</h1>
      <p>fotografo</p>
      <div className="hero-btns">
        <Button fontBig big primary>
          About
        </Button>
      </div>
    </div>
  )
}

export default HeroSection
