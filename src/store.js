import { connectRouter, routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import pokemon from "./reducers/pokemon";

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  pokemon,
  router: connectRouter(history),
});

export default createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, routerMiddleware(history)),
    (window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(): (f) => f)
  )
);
