import React from "react";
import "./Authentication.css"
import { Link } from "react-router-dom"
import authentication from "./img/Authentication.svg"

class Authentication extends React.Component {
    constructor () {
        super();
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onEmailChange (e) {
        this.setState({email: e.target.value});
    }

    onPasswordChange (e) {
        this.setState({password: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();
        fetch('http://localhost:8000/authentication/', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {'Content-Type': 'application/json'},
        })
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                alert("Email or password is incorrect")
                return Promise.reject(response.status)
            }
        })
        .then(body => {
            localStorage.setItem('accessToken', body.accessToken);
            localStorage.setItem('refreshToken', body.refreshToken);
            alert(`Wellcome ${body.name}`)
        })
        .catch(error => {

        })
    }

    render () { 
        if (!this.props.opened) {
            return <></>;
        }

        return (
            <div className="authentication-page">
                <form className="authentication-box" onSubmit={ this.onSubmit }>
                    <div className="cross-conteiner"  onClick={ this.props.closeAuthentication }/>
                    <img src={ authentication } className='authentication-img'/>
                    <h1 className="authentication-header">Авторизация</h1>
                    <input className='input-email-password' placeholder="Электронная почта" onChange={this.onEmailChange} />
                    <input className='input-email-password' placeholder="Пароль" onChange={this.onPasswordChange} type="password"/>
                    <button type="submit" className='authentication-submit'>Войти</button>
                    <div className='bottom-line'/>
                    <Link to="/reg" onClick={ this.props.closeAuthentication } className="lets-reg">Зарегистрироваться</Link>
                </form>
            </div>
        )
    }
}

export default Authentication