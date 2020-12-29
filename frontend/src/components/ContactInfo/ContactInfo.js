import React from "react";
import './ContactInfo.css';

function ContactInfo () {
    return (
    <div className = "contacts-container">
        <h1 className = "contacts-header">Контакты</h1>
        <div className ="container-mail-phone">
            <div className = "text-mail-phone-info-container">
                <p className = "text-mail-phone"> Электронная почта </p>
                <p className = "text-mail-phone-data">drive@skillfactory.com </p>
            </div>
            <div className="midle-div"></div>
            <div className="text-mail-phone-info-container">
                <p className="text-mail-phone"> Телефон</p>
                <p className="text-mail-phone-data">+7 912 123-45-67</p>
            </div>
        </div>   
    </div>
    )
}
export default ContactInfo;
