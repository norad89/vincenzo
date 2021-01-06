import React from "react"
import {
  FaFacebook,
  FaInstagram,
} from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import {
  FooterContainer,
  SocialIcon,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from "./FooterElements"

const Footer = () => {
  return (
    <FooterContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to="/">
            <SocialIcon />
            VR
          </SocialLogo>
          <WebsiteRights>VICENZO RAIMONDI © {new Date().getFullYear()}</WebsiteRights>
          <SocialIcons>
            <SocialIconLink href="https://www.facebook.com/vincenzo.raimondi.1829" target="_blank" aria-label="Facebook">
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href="https://www.instagram.com/vincenzo.raimondi.1829" target="_blank" aria-label="Instagram">
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink href="mailto:raixvin@gmail.com" target="_blank" aria-label="Email">
              <MdEmail />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  )
}

export default Footer
