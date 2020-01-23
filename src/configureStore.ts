import {ApplicationState, createRootReducer } from "./redux";
import {applyMiddleware, createStore, Store} from "redux";
import {History} from "history";
import {routerMiddleware} from "connected-react-router";

export default function configureStore(history: History, initialState: ApplicationState): Store<ApplicationState> {
    return createStore(createRootReducer(history), initialState, applyMiddleware(routerMiddleware(history)));
}

