import React from "react";
import vector from './img/Vector.svg'

class AnswerQwestion extends React.Component {
    render () {
        return (
            <div className="question-answer-container">
                <div className="question">
                    <span>{ this.props.qwestion }</span>
                    <img src={ vector } className="vector" />
                </div>
                <div className="answer">{ this.props.answer }</div>
            </div>
        )
    }

}

export default AnswerQwestion