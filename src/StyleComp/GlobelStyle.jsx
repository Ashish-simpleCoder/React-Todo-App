import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    border:none;
    outline:none;
}
html{
    font-size:62.5%;
    font-family:sans-serif;
}
body{
    height:100vh;
    width:90vw;
    margin:0 auto;
    background:url('../back.jpg');
    background-size:cover;
    background-position:center center;
    background-repeat:no-repeat;
}

:root{
    --main-h1-clr:rgb(12, 11, 11);
    --main-h1-before-bg-clr:rgb(62,203,238);
    --body-bg-clr:rgb(206, 229, 245);

    --input-bg-clr:rgb(255, 255, 255);
    --focused-input-bg-clr:rgb(20,200,200);
    --create-btn-bg-clr:rgb(25, 204, 79);
    --create-btn-hover-bg-clr:rgb(255, 255, 255);

    /* --todo-list-bg-clr:rgb(243, 83, 34); */
    --todo-list-bg-clr:rgb(20, 200, 200);
    --delete-btn-clr:rgb(250, 40, 40);
    --delete-btn-hover-clr:rgb(245, 19, 19);
}
h1{
    text-align:left;
    display:inline-block;
    position:relative;
    margin-top:1rem;
    font-weight:200;
    letter-spacing:0.1rem;
    font-size:clamp(1.8rem,2.8rem,2.8vw);
    color:var(--main-h1-clr);

     ::before{
        content:'';
        position:absolute;
        height:0.2rem;
        width:80%;
        background:var(--main-h1-before-bg-clr);
        bottom:-30%;
        left:10%;
    }
}
.active{
    text-decoration:line-through;
}

`;
export default GlobalStyle;
