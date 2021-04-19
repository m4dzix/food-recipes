import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;700&display=swap');
html{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
*,::before, ::after{
  box-sizing: inherit;
}
body{
  font-family: 'Montserrat', sans-serif;
}
`;