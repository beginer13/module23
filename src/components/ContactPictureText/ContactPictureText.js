import React from "react";
import logo from "./img/undraw_team_spirit_hrr4.svg"
import './ContactPictureText.css';


function ContactPictureText () {
        return (
        <div>
            <div className = "picture-text-container">
                <img className = "page-picture" src={logo} alt="Team icon" />
                <h1 className = "page-header">О нас</h1>
                <p className = "page-header-text">
                    Это учебный проект, созданный с целью получения боевого опыта в разработке настоящего живого веб-приложения. Этот сервис имитирует работу каршеринга, в котором можно не только арендовать автомобили, но и сдавать их в аренду
                </p>    
            </div>
            <div className = "contacts-container">
                <h1 className = "contacts-header">Контакты</h1>
                <div className ="container-mail-phone">
                    <div className = "text-mail-phone-info-container">
                        <p className = "text-mail-phone"> Электронная почта </p>
                        <p className = "text-mail-phone-data">drive@skillfactory.com </p>
                    </div>
                </div>
                <div className="midle-div"></div>
                <div className="text-mail-phone-info-container">
                    <p className="text-mail-phone"> Телефон</p>
                    <p className="text-mail-phone-data">+7 912 123-45-67</p>
                </div>
            </div>
        </div> 
        )
    };


export default ContactPictureText