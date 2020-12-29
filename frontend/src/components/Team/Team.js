import React from "react";
import './Team.css';
import ivanov from "./img/IvanIvanov.jpg"
import smirnov from "./img/AlekseiSmirnov.jpg"
import yartsev from "./img/DenisYartsev.jpg"
import morozov from "./img/NikolayMorozov.jpg"
import deeva from "./img/IrinaDeeva.jpg"
import strelkova from "./img/MariaStrelkova.jpg"

class Team extends React.Component {

    render() {
        return (
            <div className="team-container">

                <h1 className="contacts-header">Команда</h1>

                <div className="photo-employees-container">
                    
                    <div className="photo-employee">
                        <img src= { ivanov } alt="Иван Иванов" className="photo-employee-single" />
                        <p className="employee-name">Иван Иванов</p>
                        <p className="employee-position">CEO</p>
                    </div>

                    <div className="photo-employee" >
                        <img src={ smirnov } alt="Aleksey Smirnov" className="photo-employee-single" />
                        <p className="employee-name">Алексей Смирнов</p>
                        <p className="employee-position">Frontend-разработчик</p>
                    </div>
                    
                    <div className="photo-employee">
                        <img src={ yartsev } alt="Denis Yartsev" className="photo-employee-single" />
                        <p className="employee-name">Денис Ярцев</p>
                        <p className="employee-position">Backend-разработчик</p>
                    </div>

                    <div className="photo-employee">
                        <img src={ morozov } alt="Nikolay Morozov" className="photo-employee-single" />
                        <p className="employee-name">Николай Морозов</p>
                        <p className="employee-position">Дизайнер</p>
                    </div>

                    <div className="photo-employee">
                        <img src={ deeva } alt="Irina Deeva" className="photo-employee-single" />
                        <p className="employee-name">Ирина Деева</p>
                        <p className="employee-position">Копирайтер</p>
                    </div>

                    <div className="photo-employee">
                        <img src={ strelkova } alt="Maria Strelkova" className="photo-employee-single" />
                        <p className="employee-name">Мария Стрелкова</p>
                        <p className="employee-position"> SMM</p>
                    </div>

                </div>
            </div> 
        );
    }
}

export default Team;
