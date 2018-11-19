import App, { Container } from "next/app";
import React from "react";
import { Provider } from "react-redux";

import withReduxStore from "../lib/redux-store";
import GlobalStyle from "./styles/global.style";
class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Container>
        <Provider store={reduxStore}>
          <Component {...pageProps} />
        </Provider>
        <GlobalStyle />
      </Container>
    );
  }
}

export default withReduxStore(MyApp);
