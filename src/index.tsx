import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/common.scss';
import './styles/little/index.scss';
import configureStore from './configureStore'
import * as serviceWorker from './serviceWorker';
import { createBrowserHistory } from 'history';
import Main from "./Main";

const history = createBrowserHistory();

// @ts-ignore
const initialState = window.INITIAL_REDUX_STATE;
const store = configureStore(history, initialState);

ReactDOM.render(<Main store={store} history={history} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
