import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  // Reset CSS
  html{
    font-size: 62.5%;
  }
  * {
    -webkit-tap-highlight-color: transparent;
  }
  
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  sub,
  sup,
  tt,
  var,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video,
  button,
  input,
  br {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    color: #000;
    /* line-height: 1.2; */
    letter-spacing: -0.36px;
    /* // font-family: 'pretendard-regular';
    font-family: 'Pretendard'; */
    font-weight: 400;
  }
  
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  
  a {
    display: inline-block;
    text-decoration: none;
    color: inherit;
  }
  
  a:link,
  a:visited {
    text-decoration: none;
  }
  
  a:hover,
  a:active {
    text-decoration: none;
  }
  
  img {
    border: none;
    vertical-align: middle;
  }
  
  ol,
  ul,
  li {
    list-style: none;
  }
  
  i,
  em {
    font-style: normal;
  }
  
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  
  fieldset {
    border: none;
  }
  
  legend {
    width: 1px;
    height: 1px;
    overflow: hidden;
    visibility: hidden;
    line-height: 0;
    font-size: 0;
    position: absolute;
    left: -999px;
  }

  textarea {
    resize: none;
  }
  
  input,
  select,
  button,
  textarea {
    outline: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    font-family: 'Pretendard';
  }

  button{
    cursor: pointer;
  }
  
  button:focus {
    outline: 0;
  }

  .ellipsis{
    white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; 
  }
`;

export default GlobalStyle;
