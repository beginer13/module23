import React, { useState } from "react";
import './InputArea.css';
import vector from './img/Vector.svg'

class InputArea extends React.Component {
    constructor () {
        super();
        this.onNameChange = this.onNameChange.bind(this);
        this.onBirhtdayChange = this.onBirhtdayChange.bind(this);
        this.onPhoneChange = this.onPhoneChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onPassNomChange = this.onPassNomChange.bind(this);
        this.onPassDateChange = this.onPassDateChange.bind(this);
        this.onPassOfficeChange = this.onPassOfficeChange.bind(this);
        this.onPassOfficeCodChange = this.onPassOfficeCodChange.bind(this);
        this.onLicenceNomChange = this.onLicenceNomChange.bind(this);
        this.onLicenceDateChange = this.onLicenceDateChange.bind(this);
        this.state = { passDate: '1970-01-01', licenceDate: '1970-01-01', birthday: '1970-01-01' }
    };

    render() {
        return (
        <div className="input-area">
            <div className="nav-registration"> 
                <p className="nav-arrow"> <img src={vector} className="vector" /> Назад</p>
                <span className="step">Шаг 1 из 3</span>
                <p className="nav-arrow"></p>
            </div>
            <h1 className = "reg-page-header" >Расскажите о себе</h1>
            <form className='input-form'>
                <span className='sub-header'>Информация о вас</span>
                <div className="input-fild"> 
                <span className='fild-name'>ФИО</span>
                    <input placeholder="ФИО полностью" className='input-text' type='text' onChange={this.onNameChange}/>
                </div>
                <div className='input-fild'>
                    <span className='fild-name'>Дата рождения</span>
                    <input type="date" value={this.state.birthday} className='input-digit' onChange={this.onBirhtdayChange}/>
                </div>
                <div className='input-fild'>
                    <span className='fild-name'>Электронная почта</span>
                    <input placeholder='mail@example.com' className='input-text' onChange={this.onEmailChange} />
                </div>
                <div className='input-fild'>
                    <span className='fild-name'>Пароль</span>
                    <input type="password" placeholder='пароль' className='input-text' onChange={this.onPasswordChange} />
                </div>
                <div className='input-fild'>
                    <span className='fild-name'>Телефон</span>
                    <input placeholder='+7 900 000-00-00' className='input-digit' onChange={this.onPhoneChange} />
                </div>
                <span className='sub-header'>Паспорт</span>
                <div className='input-fild'>
                    <span className='fild-name'>Серия и номер</span>
                    <input className='input-digit' onChange={this.onPassNomChange} />
                </div>
                <div className='input-fild'>
                    <span className='fild-name'>Дата выдачи</span>
                    <input type='date' value={this.state.passDate} className='input-digit' onChange={this.onPassDateChange} />
                </div>
                <div className='input-fild'>
                    <span className='fild-name'>Кем выдан</span>
                    <input className='input-text' onChange={this.onPassOfficeChange} />
                </div>
                <div className='input-fild'>
                    <span className='fild-name'>Код подразделения</span>
                    <input className='input-digit' onChange={this.onPassOfficeCodChange} />
                </div>
                <span className='sub-header'>Водительское удостоверение</span>
                <div className='input-fild'>
                    <span className='fild-name'>Серия и номер</span>
                    <input id='licencenom' className='input-digit' onChange={this.onLicenceNomChange} />
                </div>
                <div className='input-fild'>
                    <span className='fild-name'>Дата выдачи</span>
                    <input type='date' value={this.state.licenceDate} className='input-digit' onChange={this.onLicenceDateChange} />
                </div> 
            </form>
            <div className='continue'>
                <button id='submit' className="submit" onClick={this.nextForm.bind(this)}>Продолжить</button>
            </div>
        </div>
        )
    };

    onLicenceNomChange (e) {
        this.setState({licenceNom: e.target.value});
    };
    onLicenceDateChange (e) {
        this.setState({licenceDate: e.target.value});
    };
    onPassOfficeCodChange (e) {
        this.setState({passOfficeCod: e.target.value});
    };
    onPassOfficeChange (e) {
        this.setState({passOffice: e.target.value});
    };
    onPassDateChange (e) {
        this.setState({passDate: e.target.value});
    };
    onPassNomChange (e) {
        this.setState({passNom: e.target.value});
    };
    onNameChange (e) {
        this.setState({name: e.target.value});
    };
    onBirhtdayChange (e) { 
        this.setState({birthday: e.target.value});
    };
    onEmailChange (e) {
        this.setState({email: e.target.value});
    };
    onPasswordChange (e) {
        this.setState({password: e.target.value});
    };
    onPhoneChange (e) {
        this.setState({phone: e.target.value});
    };

    nextForm(e) {
        e.preventDefault();
        fetch('http://localhost:8000/registration/', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {'Content-Type': 'application/json'},
        })
        .then(responce => responce.json())
        .then(body => {
            if (body.success) {
                localStorage.setItem('accessToken', body.accessToken);
                localStorage.setItem('refreshToken', body.refreshToken);   
            };
            alert(body.text);
        })
    };
}

export default InputArea;