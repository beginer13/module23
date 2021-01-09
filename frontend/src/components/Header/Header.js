import { Link } from "react-router-dom"
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

    componentWillUnmount() {
        document.body.removeEventListener('click', this.hideNav);
    }

    render() {
        const opened = this.state.opened;

        const navClassName = opened ? "nav nav-opened" : "nav";

        return (
            <div className='header'>
                <div> 
                    <Link to="/">
                        <img src={logo} alt="Image here" className="logo" />
                    </Link>
                </div>
                <nav className={navClassName}>
                    <Link to="/" className="menu-item" >О нас</Link>
                    <Link to="/" className="menu-item">Условия</Link>
                    <Link to="/faqpage" className="menu-item" >Частые вопросы</Link>
                    <div className="menu-item login" onClick={ this.props.openAuthentication }>Войти</div>
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
