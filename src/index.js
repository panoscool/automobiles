import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import history from "./history";
import { store } from "./store/configureStore";
import LanguageProvider from "./LangContext";
import * as serviceWorker from "./serviceWorker";

const app = (
  <Provider store={store}>
    <LanguageProvider>
      <Router history={history}>
        <App />
      </Router>
    </LanguageProvider>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
