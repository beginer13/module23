import React from "react";
import { Link, BrowserRouter as Router, Route, Switch, Redirect, withRouter } from 'react-router-dom';
import './App.css';
import MainPage from "./MainPage/MainPage.js";
import FaqPage from "./FaqPage/FaqPage.js";
import RegistrationPage from "./RegistrationPage/RegistrationPage.js";

function App () 
    {
        return (
        <div className='App'>  
                <Switch>
                    <Route path='/mainpage' component={ MainPage } />
                    <Route path='/faqpage' component={ FaqPage } />
                    <Route path='/reg' component={ RegistrationPage } />
                    <Redirect from='/' to='/mainpage'/>
                </Switch>
        </div>
        )  
    };

export default App;