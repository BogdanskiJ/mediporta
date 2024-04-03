import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    };
    *,::after, ::before {
        box-sizing: inherit;
    };

    body {
        margin: 0 auto;
        background: ${({ theme }) => theme.color.whisper};
        font-family: "Roboto", sans-serif;
    };
    
    body::-webkit-scrollbar {
        width: 6px;
        height: 6px;
    }
    body::-webkit-scrollbar-track {
        border-radius: 10px;
        background: ${({ theme }) => theme.color.blackOpacity01};
    }
    body::-webkit-scrollbar-thumb{
        border-radius: 10px;
        background: ${({ theme }) => theme.color.blackOpacity02};
    }
    body::-webkit-scrollbar-thumb:hover{
  	    background: ${({ theme }) => theme.color.blackOpacity04};
    }
    body::-webkit-scrollbar-thumb:active{
  	    background: ${({ theme }) => theme.color.blackOpacity05};
    }

    ::-webkit-scrollbar {
        width: 6px;
        height: 6px;height: 1rem;
    width: 0.5rem;
    }
    ::-webkit-scrollbar-track {
        border-radius: 10px;  
        background: transparent;
    }
    ::-webkit-scrollbar-thumb{
        border-radius: 10px;
        height:1rem;
        background: ${({ theme }) => theme.color.blackOpacity02};
    }
    ::-webkit-scrollbar-thumb:hover{
  	    background: ${({ theme }) => theme.color.blackOpacity04};
    }
    ::-webkit-scrollbar-thumb:active{
  	    background: ${({ theme }) => theme.color.blackOpacity05};
    }
`;
