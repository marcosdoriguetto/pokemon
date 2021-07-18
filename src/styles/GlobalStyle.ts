import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #000000;
    --secondary: #F01E1F;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 16px;
    font-family: sans-serif;
    background-color: #F3FBF4;
    padding-block: 1rem;
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