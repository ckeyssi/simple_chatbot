import React from "react";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Chat from "./components/Chat";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: ubuntu;
}

`;

function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer />
      <BrowserRouter >
        <Switch>
          <Route path="/chatroom" component={Chat} />
          <Redirect from="/" to="/chatroom" />
        </Switch>
      </BrowserRouter >
    </>
  );
}

export default App;
