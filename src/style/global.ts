import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {


--color-primary: hsl(25, 97%, 53%)


--color-neutral-white: hsl(0, 0%, 100%)
--color-neutral-light-grey: hsl(217, 12%, 63%)
--color-neutral-medium-grey: hsl(216, 12%, 54%)
--color-neutral-dark-blue: hsl(213, 19%, 18%)
--color-neutral-very-dark: hsl(216, 12%, 8%)
}
#root {
     height: 100%;
 }
 html, body{
    transition:  0.5s all;
    height: 100%;
    font-family: 'Lexend Deca', sans-serif;
 }

`;

export default GlobalStyles;
