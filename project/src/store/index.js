import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import {createBrowserHistory} from "history";

import {rootReducer} from "../reducers";

const composeEnchancers = (window && window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']) || compose;

export const store = createStore(rootReducer, composeEnchancers(applyMiddleware(thunk)));
export  const history = createBrowserHistory();