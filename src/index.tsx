import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import MainContext from "./contexts/mainContext";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import * as ServicerWorder from "./serviceWorkerRegistration";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const theme = {
  light: {
    primary: "#0abab5",
    textColor: "black",
    font: "Arial",
  },
  dark: {
    primary: "blue",
    textColor: "white",
    font: "SanFransisco",
  },
};

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${(props) => props.theme.light.font};
  }
`;

root.render(
  <>
    <BrowserRouter>
      <MainContext>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </MainContext>
    </BrowserRouter>
  </>
);
ServicerWorder.register();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
