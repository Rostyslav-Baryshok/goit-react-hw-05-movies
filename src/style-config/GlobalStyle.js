import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
}

code {
   font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
}

h1,
h2,
h3,
p,
ul {
   margin: 0;
}

ul {
   padding: 0;
   list-style: none;
}

img {
   display: block;
   height: auto;
   width: 100%
}
`;
