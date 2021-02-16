import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle` 
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  *, button, input {
    font-family: 'Roboto', sans-serif;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  :root {
    --primary-color: #009688;
    --secondary-color: #f5f5f5;
    --white-color: #fff;
    --title-color: #333333;
    --subtitle-color: #909090;
    --shadow-color: #777;
    --border-color: #ccc;
  }
  .grecaptcha-badge { 
    visibility: hidden; 
  } 
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px #ffffff inset !important;
  }
`