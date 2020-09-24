import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
:root{
    --O-color: #2196f3;
    --X-color: #f44336;
    --D-color: #777;
}


*{
margin:0;
padding: 0;
outline:0;
box-sizing: border-box;
}

body{
  display:grid;
align-items:center;
justify-content:center;
font-family:sans-serif;
background: #eee;
height:100vh;
}



`;