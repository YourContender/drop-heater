import React from 'react';
import "./QuestionProd.scss";
import first from "./11.png"
import second from "./12.png"
import third from "./13.png"

export const QuestionProd = () => {
    return (
        <div className="question-wrapper">
            <div className="question-wrapper-title">Як замовити</div>
            <div className="question-wrapper-subtitle">Фітнес тренажер</div>

            <div className="question-wrapper-steps">
                <div className="question-wrapper-steps-item">
                    <div className="step-img">
                        <img src={first} alt="" />
                    </div>
                    <div className="step-text">
                        <h3>Крок 1</h3>
                        <span>Заповніть форму замовлення</span>
                    </div>
                </div>

                <div className="question-wrapper-steps-item">
                    <div className="step-img">
                        <img src={second} alt="" />
                    </div>
                    <div className="step-text">
                        <h3>Крок 2</h3>
                        <span>Дочекайтесь дзвінка оператора</span>
                    </div>
                </div>

                <div className="question-wrapper-steps-item">
                    <div className="step-img">
                        <img src={third} alt="" />
                    </div>
                    <div className="step-text">
                        <h3>Крок 3</h3>
                        <span>Оплатіть товар після отримання</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
