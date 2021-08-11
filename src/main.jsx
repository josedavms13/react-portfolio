import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import {composeWithDevTools} from "redux-devtools-extension";

import {createStore, applyMiddleware} from 'redux';
import {Provider} from "react-redux";
import rootReducer from "./redux/reducers/rootReducer";
import thunk from "redux-thunk";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)
