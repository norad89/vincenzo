import React from "react"
import "./layout.css"
import Navbar from "./Navbar"
import Footer from "./Footer"
import CookieConsent from "react-cookie-consent"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <CookieConsent
        style={{ display: "center", backgroundColor: "rgba(74, 75, 76, 0.8)", textAlign: "center",}}
        buttonText="Ho capito"
        buttonStyle={{ backgroundColor: "white", color: "black", fontSize: "13px", marginTop: "0" }}
      >
        Questo sito fa uso di cookie per migliorare l’esperienza di navigazione
        degli utenti e per raccogliere informazioni sull’utilizzo del sito
        stesso.
      </CookieConsent>
    </>
  )
}

export default Layout
