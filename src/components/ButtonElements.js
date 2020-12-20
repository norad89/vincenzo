import styled from "styled-components"

export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? "white" : "#4a4c4b")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "16px 64px" : "10 px 20px")};
  color: black;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  font-family: "Ubuntu", sans-serif;

  &:hover {
    transition: all 0.3s ease-out;
    background: ${({ primary }) => (primary ? "#4a4c4b" : "white")};
    color: white
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`
