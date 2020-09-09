import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./rootReducer";
import thunk from 'redux-thunk';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
    }

    var window: Window & typeof globalThis
}

const middlewares = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, undefined, composeEnhancers(applyMiddleware(...middlewares)));

export default store;