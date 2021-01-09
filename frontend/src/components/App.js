import React from "react";
import { Link, BrowserRouter as Router, Route, Switch, Redirect, withRouter } from 'react-router-dom';
import './App.css';
import MainPage from "./MainPage/MainPage";
import FaqPage from "./FaqPage/FaqPage";
import RegistrationPage from "./RegistrationPage/RegistrationPage";
import Authentication from "../containers/Authentication"


function App () {
    return (
        <div className='App'>  
            <Switch>
                <Route path='/mainpage' component={ MainPage } />
                <Route path='/faqpage' component={ FaqPage } />
                <Route path='/reg' component={ RegistrationPage } />
                <Redirect from='/' to='/mainpage'/>
            </Switch>
            <Authentication />
        </div>
    )  
};

export default App;