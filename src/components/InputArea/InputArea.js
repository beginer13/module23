import React, { useState } from "react";
import './InputArea.css';
import vector from './img/Vector.svg'

// const InputArea = () => {
//     const [name, setName] = useState('')

//     function onNameChange (e) {
//         setName("klasjdfl;kasFJ");
//         alert(name);
//     }

//     return (
//         <form className='input-form'>
//                 <div className="input-fild"> 
//                     ФИО <input id='name' value={name} type='text'></input>
//                 </div>
//         </form>
//     )
// }

class InputArea extends React.Component {
    constructor () {
    super();
    this.onNameChange = this.onNameChange.bind(this);
    this.onBirhtdayChange = this.onBirhtdayChange.bind(this);
    this.onPhoneChange = this.onPhoneChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPassNomChange = this.onPassNomChange.bind(this);
    this.onPassDateChange = this.onPassDateChange.bind(this);
    this.onPassOfficeChange = this.onPassOfficeChange.bind(this);
    this.onPassOfficeCodChange = this.onPassOfficeCodChange.bind(this);
    this.onLicenceNomChange = this.onLicenceNomChange.bind(this);
    this.onLicenceDateChange = this.onLicenceDateChange.bind(this);
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
                    ФИО 
                    <input id='name' className='input-text' type='text' onChange={this.onNameChange}/>
                </div>
                <div className='input-fild'>
                    Дата рождения 
                    <input type="text" className='input-digit' onChange={this.onBirhtdayChange}/>
                </div>
                <div className='input-fild'>
                    Электронная почта
                    <input id='email' className='input-text' onChange={this.onEmailChange} />
                </div>
                <div className='input-fild'>
                    Телефон
                    <input id='phone' className='input-digit' onChange={this.onPhoneChange} />
                </div>
                <span className='sub-header'>Паспорт</span>
                <div className='input-fild'>
                    Серия и номер
                    <input id='passnom' className='input-digit' onChange={this.onPassNomChange} />
                </div>
                <div className='input-fild'>
                    Дата выдачи
                    <input id='passdate' className='input-digit' onChange={this.onPassDateChange} />
                </div>
                <div className='input-fild'>
                    Кем выдан
                    <input id='passoffice' className='input-text' onChange={this.onPassOfficeChange} />
                </div>
                <div className='input-fild'>
                    Код подразделения
                    <input id='passofficecod' className='input-digit' onChange={this.onPassOfficeCodChange} />
                </div>
                <span className='sub-header'>Водительское удостоверение</span>
                <div className='input-fild'>
                    Серия и номер
                    <input id='licencenom' className='input-digit' onChange={this.onLicenceNomChange} />
                </div>
                <div className='input-fild'>
                    Дата выдачи
                    <input id='licencedate' className='input-digit' onChange={this.onLicenceDateChange} />
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
    onPhoneChange (e) {
        this.setState({phone: e.target.value});
    };

    nextForm (e) {
        e.preventDefault()
        console.log (this.state);
        alert('Wait');
    };
}


export default InputArea;