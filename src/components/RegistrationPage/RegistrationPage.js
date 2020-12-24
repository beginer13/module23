import React from "react";
import Header from "../Header/Header.js";
import './RegistrationPage.css';
import InputArea from '../InputArea/InputArea.js';

class RegistrationPage extends React.Component {

    render() {
        return (
        <div className="registrationpage">
            <Header />
            <InputArea /> 
        </div>
        )
    }
}

export default RegistrationPage;