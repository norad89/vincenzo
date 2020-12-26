import React from "react"
import "./HeroSection.css"
import { Button } from "../ButtonElements"
import { navigate } from "gatsby"
import cover from "../../images/background.jpg"

export default function HeroSection() {
  const handleClick = () => {
    navigate("/about")
  }

  return (
    <div
      className="hero-container"
      style={{ backgroundImage: `url(${cover})` }}
    >
      <h1>Vincenzo Raimondi</h1>
      <p>fotografo</p>
      <div className="hero-btns">
        <Button fontBig big primary onClick={() => handleClick()}>
          about
        </Button>
      </div>
    </div>
  )
}
