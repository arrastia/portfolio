import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
  }

  :root { 
    --bg: ${({ theme }) => (theme.background ? theme.background : '#f9fafb')};
    --black: #000000;
    --first-color: ${({ theme }) => theme.firstColor};
    --random-color: #61dafb;
    --react: #61dafb;
    --second-color: ${({ theme }) => theme.secondColor};
    --text: ${({ theme }) => (theme.text ? theme.text : '#282c34')};
    --white: #ffffff;
  }

  .dark-mode {
    --bg: #282c34;
    --text: #f9fafb;
  }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    margin: 0;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
`;
