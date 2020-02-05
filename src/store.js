import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./reducers";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

export default () => {
  const enhancers = composeWithDevTools(
    applyMiddleware(thunkMiddleware, logger)
  );
  const store = createStore(rootReducer, enhancers);
  return store;
};
