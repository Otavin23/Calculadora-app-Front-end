import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@700;800&display=swap');
    
*{
      margin: 0;
      padding: 0;
      box-sizing:border-box;
      font-family: 'Inter', sans-serif;
      font-weight: 400;
    }
    body {
        background-color:${(props) => props.theme.colors.bodyColor};
        display: flex;
        align-items: center;
        justify-content:center ;
        height: 100vh;
        transition: all 0.3s ease;
      
      }
`;
