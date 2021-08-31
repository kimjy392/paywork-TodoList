import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyles = createGlobalStyle`
  ${reset}

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Barlow', sans-serif;
  }
  input, button {
    background-color: transparent;
    border: none;
    outline: none;
  }
  button {
    font-family: 'Barlow', sans-serif;
    cursor: pointer;
  }
  ol,
  ul {
    list-style: none;
  }
  a{
    text-decoration: none;
    color: inherit;
  }
   img {
    max-width: 100%;
    height: auto;
 }

`;
