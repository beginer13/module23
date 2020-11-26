import React from "react";
import logo from "./img/undraw_team_spirit_hrr4.svg"
import './ContactPictureText.css';


function ContactPictureText () {
        return (
            <div className = "picture-text-container">
                <img className = "page-picture" src={logo} alt="Team icon" />
                <h1 className = "page-header">О нас</h1>
                <p className = "page-header-text">
                    Это учебный проект, созданный с целью получения боевого опыта в разработке настоящего живого веб-приложения. Этот сервис имитирует работу каршеринга, в котором можно не только арендовать автомобили, но и сдавать их в аренду
                </p>    
            </div>
        )
    };


export default ContactPictureText