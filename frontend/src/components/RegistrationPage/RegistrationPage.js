import React from "react";
import Header from '../../containers/Header.js'
import './RegistrationPage.css';
import InputArea from '../InputArea/InputArea.js';

class RegistrationPage extends React.Component {
    render() {
        return (
        <div className="registration-page">
            <Header />
            <InputArea /> 
        </div>
        )
    }
}

export default RegistrationPage;