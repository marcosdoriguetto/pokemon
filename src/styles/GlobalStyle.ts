import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #000000;
    --secondary: #1549D5;
    --background: #EEF1F7;
    --textColor: #091536;
    --grass: #5FBD58;
    --bug: #92BC2C;
    --dark: #595761;
    --dragon: #0C69C8;
    --electric: #F2D94E;
    --fairy: #EE90E6;
    --fighting: #D3425F;
    --fire: #dc872f;
    --flying: #A1BBEC;
    --ghost: #5F6DBC;
    --ground: #DA7C4D;
    --ice: #75D0C1;
    --normal: #A0A29F;
    --poison: #B763CF;
    --psychic: #ff2ca8;
    --rock: #a38c21;
    --steel: #5695A3;
  --water: #539DDF;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 16px;
    font-family: 'Inter', sans-serif;
    background-color: #EEF1F7;
    padding-block: 1rem;
    color: #091536;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Lexend', sans-serif;
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