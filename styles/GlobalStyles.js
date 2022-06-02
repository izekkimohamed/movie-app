import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
 :root {

   --brand-clr: 175  69% 49%;
   --bg-clr: 230  11% 11%;
   --text-clr: 214  32% 91%;
 
  --font-xs: clamp(0.5rem, 1vw, 1rem);
  --font-sm: clamp(0.8rem, 1.2vw, 1.2rem);
  --font-md: clamp(1.2rem, 1.5vw, 1.5rem);
  --font-lg: clamp(1.6rem, 2vw, 2rem);
  --font-xl: clamp(2.4rem, 2.5vw, 2.5rem);
 }



  html {
    font-size: 16px;
    font-weight: normal;
    font-family:"Poppins", sans-serif;
    color: hsl(var(--text-clr)); ;
  }

*, *:before, *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
 
  body{
   background-color: hsl(var(--bg-clr) / .95);
   overflow-y: ${(props) => (props.trailer ? "hidden" : "scroll")};
}

ol, ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}

a {
    text-decoration: none;
    cursor: pointer;
    color: hsl(var(--text-clr)); ;
}

button {
    border: none;
    cursor: pointer;
}
*::-webkit-scrollbar {
    width: 8px;
    height: 10px;
  }
  *::-webkit-scrollbar-track {
    background-color: transparent;
  }
  *::-webkit-scrollbar-thumb {
    background-color: #718096;
    border-radius: 9999px;
  }
  .pointer{
    cursor: pointer;
  }
`;
