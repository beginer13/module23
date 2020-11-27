import React from 'react';
import "./FaqHeader.css"
import logo from "./img/undraw_questions_75e0 1.svg"

class FaqHeader extends React.Component {
        render () {
        return (
        <div className="picture-text-container">
            <img className="page-picture" src={ logo } alt="quetion" />
            <h1 className="page-header">Частые вопросы</h1>
            <p className="page-header-text">
                Отвечаем на вопросы, которые у вас могут возникнуть.
            </p>    
        </div>
        )
    }
}

export default FaqHeader