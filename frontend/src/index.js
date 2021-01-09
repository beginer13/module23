import React from "react";
import ReactDOM from "react-dom";
import { Link, BrowserRouter as Router, Route, Switch, Redirect, withRouter } from 'react-router-dom';
import App from "./components/App";
import './index.css'
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./store/reducers/rootReducer.js"

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
    <Router>
        <Provider store={ store }>
            <App />
        </Provider>    
    </Router>, 
    document.getElementById("root")
);
