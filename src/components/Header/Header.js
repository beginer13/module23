import logo from './img/logo.svg';
import burger from './img/burger.svg';
import React from 'react'
import './Header.css';

class Header extends React.Component {

    constructor() {
        super();
        this.hideNav = this.hideNav.bind(this);
        this.showNav = this.showNav.bind(this);
        this.state = { opened: false };
    }

    componentDidMount() {
        document.body.addEventListener('click', this.hideNav);
    }

    render() {
        const opened = this.state.opened;

        const navClassName = opened ? "nav nav-opened" : "nav";

        return (
            <div className='header'>
                <div> 
                    <a href="/">
                        <img src={logo} alt="Image here" className="logo" />
                    </a>
                </div>
                <nav className={navClassName}>
                    <a href="#" className="menu-item" >О нас</a>
                    <a href="#" className="menu-item">Условия</a>
                    <a href="./faq.html" className="menu-item" >Частые вопросы</a>
                    <a href="#" className="menu-item login">Войти</a>
                </nav>
                <div className="nav-lines">
                    <img src={burger} className="hamburger" id="burger" onClick={this.showNav}/>
                </div>
            </div>
        );
    }

    showNav(event) {
        event.stopPropagation();
        this.setState({ opened: true });
    }

    hideNav() {
        this.setState({ opened: false });
    }
}

export default Header;
