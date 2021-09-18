import { createGlobalStyle } from "styled-components"

export const lightTheme = {
  body: "#FFF",
  text: "dark",
  toggleBorder: "#FFF",
  background: "#5c009d",
  btn_background: "#450075",
  btn_text: "white",
}

export const darkTheme = {
  body: "#363537",
  text: "white",
  toggleBorder: "#464447",
  background: "#5c009d",
  background_secondary: "white",
  btn_background: "#450075",
  btn_text: "white",
}

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    padding: 0;
    margin: 0;
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
`
