import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from  "react-redux";
import {Router} from "react-router-dom";

import './style/index.css';
import { App } from "./components";
import {store, history} from "./store";

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
    <App />
        </Router>
    </Provider>
    , document.getElementById('root'));



