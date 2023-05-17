import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before,
  html,
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: 0;
    font-family: 'Open Sans', sans-serif;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    text-decoration: none;
    scroll-behavior: smooth;
  }
  
  body,
  html {
    background-color: ${({ theme }) => theme.colors.main};
    color: ${({ theme }) => theme.colors.primary};
  }
  
  ul,
  li {
    list-style: none;
  }
  
  img {
    display: block;
    max-width: 100%;
  }

  button, a {
    cursor: pointer;
  }

`;
