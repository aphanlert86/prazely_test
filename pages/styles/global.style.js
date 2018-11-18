import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  .no-padding-bottom {
    padding-bottom: 0 !important;
  }

  p {
    color: #aaa;
  }
`;

export default GlobalStyle;
