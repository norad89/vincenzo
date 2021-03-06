import styled from "styled-components"
import { Link } from "gatsby"
import { GiPhotoCamera } from "react-icons/gi"

export const FooterContainer = styled.div`
  background-color: #4a4c4b;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%auto;
  max-width: 1000px;
  margin: 20px auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`

export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`

export const SocialIcon = styled(GiPhotoCamera)`
  margin-right: 10px;
`

export const WebsiteRights = styled.small`
  margin-top: 5px;
  margin-bottom: 5px;
  color: #fff;
`

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 64px;

  @media screen and (max-width: 820px) {
    margin-left: -32px;
  }
`

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
  margin: 5px;
`
