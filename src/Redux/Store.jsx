import { legacy_createStore } from "redux";
import { applyMiddleware } from "redux";
import logger from "redux-logger";
import rootreducer from "./Reducer";
const store = legacy_createStore(rootreducer, applyMiddleware(logger));
export default store;