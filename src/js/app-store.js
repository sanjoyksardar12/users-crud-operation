import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";// will use redux-saga
import reducers from "./app-reducers.js";
import { composeWithDevTools } from "redux-devtools-extension";

let store;

let middleware = [reduxThunk]; //
let composeEnhancers = composeWithDevTools({});//add parmas
if (process.env.NODE_ENV === "developemnt") {
  store = createStore(reducers, /*preloadedState */ composeEnhancers(
    applyMiddleware(...middleware)
  ));
} else {
  store = createStore(reducers, applyMiddleware(...middleware));
}
window.store = store;
export default store;
