import React from 'react';
import {Store} from "redux";
import {Provider} from 'react-redux';
import App from "./App";
import {ApplicationState} from "./redux";
import {History} from "history";
import {ConnectedRouter} from "connected-react-router";


interface MainProps {
    store: Store<ApplicationState>
    history: History;
}

const Main: React.FC<MainProps> = ({ store, history }) => {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <App />
            </ConnectedRouter>
        </Provider>
    );
};

export default Main;
