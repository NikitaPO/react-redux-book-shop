import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import { Provider } from "react-redux";
import createStore from "./store";
import "./styles/index.css";

//TODO: добавить 3d анимацию карточек при наведении с описанием на обратной стороне
//TODO: onRate - менять рейтинг в state при его изменении
//TODO: добавить скрипт с puppeteer воруующий книги с Литреса
//TODO: добавить объединение одинаковых элементов в корзине

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
