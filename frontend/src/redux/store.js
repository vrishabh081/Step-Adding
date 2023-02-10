import {legacy_createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk"
import { reducer } from "./reducer";

// root reducer-
const rootReducer = combineReducers({reducer});

// store-
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))