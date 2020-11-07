import React from "react";
import ReactDOM from "react-dom";
import reducer from "../src/reducers";
import Main from "../src/components/Main";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

const store = createStore(reducer, applyMiddleware(thunk));

const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router basename="/news-feeds">
        <Main />
      </Router>
    </Provider>
  </React.StrictMode>,
  rootElement
);
