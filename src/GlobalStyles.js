import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
  }

  :root { 
    --bg: ${({ theme }) => (theme.background ? theme.background : '#f9fafb')};
    --background-image: ${({ theme }) => (theme.backgroundImage ? theme.backgroundImage : null)};
    --black: #000000;
    --first-color: ${({ theme }) => theme.firstColor};
    --random-color: #61dafb;
    --react: #61dafb;
    --second-color: ${({ theme }) => theme.secondColor};
    --text: ${({ theme }) => (theme.text ? theme.text : '#282c34')};
    --white: #ffffff;
    --glass-bg: linear-gradient(to right bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.3));
  }

  .dark-mode {
    --bg: #282c34;
    --text: #f9fafb;
    --glass-bg: linear-gradient(to right bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3));
  }

  body {
    background: var(--bg);
    background-image: var(--background-image);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    color: var(--text);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    margin: 0;
    transition: color 1s ease;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  main {
    align-items: center;
    /* background: linear-gradient(to right top, var(--first-color), var(--second-color)); */
    display: flex;
    justify-content: center;
    min-height: 100vh;
  }
`;
