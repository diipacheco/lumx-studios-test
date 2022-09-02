import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    outline: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    max-width: 100vw;
    max-height: 100vh;
    width: 100%;
    height: 100%;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    -webkit-font-smoothing: antialiased;
  }

  *, button, input {
    border: 0;
    background: none;
    font-family: 'Barlow', sans-serif;

  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  :root {
    /* Primary Colors */

    --background: #14142B;
    --dark-purple: #262338;
    --light-purple: #4E4B66;
    --dark-grey: #6E7191;
    --grey: #D9DBE9;
    --light-grey: #EFF0F6;
    --text: #FCFCFC;
    --white: #FFFFFF;

    /* Support Collors */

    --red: #D03025;
    --green: #4DBC19;

  }


   
`;
