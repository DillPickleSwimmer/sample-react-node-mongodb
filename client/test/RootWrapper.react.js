import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

export default function RootWrapper({children}): React.MixedElement {
  return (
    <React.StrictMode>
      <RecoilRoot>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </RecoilRoot>
    </React.StrictMode>
  );
}