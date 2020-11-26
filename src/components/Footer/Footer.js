import React from "react";
import facebook from './img/facebook.svg';
import vkontakte from './img/vkontakte.svg';
import XZchto from './img/XZchto.svg';
import './Footer.css'

class Footer extends React.Component {

    render() {
        return (
        <div className="footer">
            <p className="skill-rights-text">© SkillDrive Inc. 2020</p>
            <div className="icons-container">
                <a href="#"><img className="icon" src={ vkontakte } alt="в контакте" /></a>
                <a href="#"><img className="icon" src={ XZchto } alt="ХЗ что" /></a>
                <a href="#"><img className="icon"src={ facebook } alt="facebook" /></a>
            </div>
        </div>
        )
    }
}

export default Footer;
