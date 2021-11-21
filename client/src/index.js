// @flow

import "./index.css";
import App from "./components/App";

import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
