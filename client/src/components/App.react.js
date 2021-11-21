// @flow

import logo from "./logo.svg";
import "./App.css";

import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import { testData, testDataLength } from "../state/example";

function App(): React.MixedElement {
  const [data, setData] = useRecoilState(testData);
  const dataLength = useRecoilValue(testDataLength);

  // Sample API Call
  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data.message);
      });
  }, [setData]);

  return (
    <div className="App" data-testid="app_root">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Link to="/test">Test</Link>
                <p data-testid="data_result">{!data ? "Loading..." : data}</p>
                <p>Data length: {dataLength}</p>
              </>
            }
          />
          <Route
            path="test"
            element={
              <>
                <Link to="/">Home</Link>
                <p>Test</p>
              </>
            }
          />
        </Routes>
      </header>
    </div>
  );
}

export default App;
