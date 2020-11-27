import React from "react";
import vector from './img/Vector.svg'
import './AnswerQwestion.css'

class AnswerQwestion extends React.Component {
    
    constructor() {
        super();
        this.toggleAnswer = this.toggleAnswer.bind(this);
        this.state = { opened: false };
    }

    render () {

        const opened = this.state.opened;

        const containerClassName = opened ? "question-answer-container opened-question-answer" : "question-answer-container";

        return (
            <div className={containerClassName} onClick={this.toggleAnswer} >
                <div className="question">
                    <span>{ this.props.qwestion }</span>
                    <img src={ vector } className="vector" />
                </div>
                <div className="answer">{ this.props.answer }</div>
            </div>
        )
    }

    toggleAnswer() {
        const opened = !this.state.opened;
        this.setState({ opened: opened });
    }
}

export default AnswerQwestion