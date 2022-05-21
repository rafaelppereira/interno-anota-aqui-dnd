import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  :root {
    --primary-color: #7159c1;

    --background: #121214;
    --box-color: #1e1e20;
    
    --border-color: #454548;
    --white: #ffffff;

    --header-height: 5rem;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font: 1rem 'Poppins', sans-serif;
    background-color: var(--background);
    color: var(--white);

    -webkit-font-smoothing: antialiased !important;
  }

  ul {
    list-style: none;
  }

  button {
    background: transparent;
    border: 0;
    cursor: pointer;

    transition: filter 0.2s ease-in-out;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;