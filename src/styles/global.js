import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *, *:before, *:after{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    html{
        @media(max-width: 720px){
            font-size: 87.5%; //14px
        }
        @media(max-width: 1080px){
            font-size: 93.75%; //15px
        }
    }
    html, body, #root{
        min-height: 100%;
        margin: 0 auto;
    }
    body{
        -webkit-font-smoothing: antialiased !important;
        -moz-osx-font-smoothing: grayscale;
    }
 
    body, input, button {
        font-family: 'Roboto', sans-serif;
        overflow-x: hidden;
    }
    a{
        text-decoration: none;
    }
    button{
        cursor: pointer;
    }
    :root{
        --darker-gray: #C4C4C4;
        --dark-gray: #EFF1F1;
        --gray: #F8F8F8;
        --text: #000000; 
        --white: #ffffff;
        --button-color: #6B7375;
        --border-radius: 200px;
    }
`;

export default GlobalStyle;