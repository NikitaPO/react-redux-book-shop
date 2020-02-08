import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import { Provider } from "react-redux";
import createStore from "./store";
import "./styles/index.css";

//TODO: добавить анимацию книг при наведении
//TODO: onRate - менять рейтинг в state при его изменении

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
