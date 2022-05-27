import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html {
    font-size: 16px;
    font-weight: normal;
    font-family:"Poppins", sans-serif;
    color:#fff ;
  }

*, *:before, *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
 
  body{
  max-width: 100vw;
   background-color: #191a1f;
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
    color:#fff ;
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
  body{
    overflow-y: ${(props) => (props.trailer ? "hidden" : "scroll")};
  }
`;
