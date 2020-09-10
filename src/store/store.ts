import { createStore, applyMiddleware, compose } from "redux";
import rootReducer, { RootState, ActionType } from "./rootReducer";
import thunk, { ThunkDispatch } from 'redux-thunk';
import { fetchEntities } from "./entity/entityActions";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
    }

    var window: Window & typeof globalThis
}

const middlewares = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));

const dispatch: ThunkDispatch<RootState, void, ActionType> = store.dispatch;

dispatch(fetchEntities())

export default store;