import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #000000;
    --secondary: #1549D5;
    --background: #EEF1F7;
    --textColor: #091536;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 16px;
    font-family: sans-serif;
    background-color: #EEF1F7;
    padding-block: 1rem;
    color: #091536;
  }

  h1 {
    font-size: 1.5rem;
  }

  h2 {
    font-size: 1.25rem;
  }

  button {
    cursor: pointer;
    outline: none;
  }

  button:disabled {
    cursor: default;
  }
`;