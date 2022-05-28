import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,500;0,600;1,400&display=swap');
html{
box-sizing: border-box;

}
*,
*:before,
*:after{
    box-sizing:inherit;
    box-sizing: border-box;
}


body{
    max-width:1200px;
    margin: 0 auto;
    font-family: 'Poppins', sans-serif;
}

a{
    display: inline-block;
    text-decoration: none;
    color: #414141;
    margin: 0;
    padding: 0;
}
a:visited{
    color : #414141;
}
input{
    font-family: 'Poppins', san-serif;
}

div.Sidebar {
    @keyframes Move{
      to{
          opacity: initial;
          margin-left: initial;
      }  
    }
}
`;
