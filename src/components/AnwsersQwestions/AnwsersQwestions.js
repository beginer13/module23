import React from 'react';
import './AnwsersQwestions.css'
import AnswerQwestion from "../AnswerQwestion/AnswerQwestion.js"

class AnwsersQwestions extends React.Component {
    
    render() {
        return (
            <div className="questions-container">
                < AnswerQwestion answer={'No answer'} qwestion={'Могу ли я отменить бронь?'} />
                < AnswerQwestion answer={'No answer'} qwestion={'Могу ли я вернуть деньги, если не подошёл автомобиль?'} />
                < AnswerQwestion answer={'No answer'} qwestion={'Что делать, если случилось ДТП?'} />
                < AnswerQwestion answer={'Данный вопрос обсуждается с собственником, но как правило автомобиль нужно вернуть туда, где вы его получили.'} qwestion={'Могу ли я оставить автомобиль в удобном для меня месте?'} />
                < AnswerQwestion answer={'No answer'} qwestion={'Что делать, если собственник просит заплатить ему напрямую?'} />
                < AnswerQwestion answer={'No answer'} qwestion={'Должен ли я заправлять автомобиль?'} />
            </div> 
        )
    }
}
export default AnwsersQwestions
